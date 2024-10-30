"use client"

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./action";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AuthPage() {
    const [configId, setConfigId] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const configurationId = localStorage.getItem("configurationId");
        console.log("configuration id :", configurationId);
        if (configurationId) setConfigId(configurationId);
    }, []);

    const { data } = useQuery({
        queryKey: ["auth-callback"],
        queryFn: async () => await getAuthStatus(),
        staleTime: Infinity
    });

    if (data?.success) {
        if (configId) {
            console.log("data is :", data);
            console.log("config id is : ", configId);
            localStorage.removeItem('configurationId');
            router.push(`/configure/preview?id=${configId}`);
        } else {
            router.push('/')
        }
    } else {
        console.log("data in error mode is: ", data);
        console.log("error in auth-callback data");
    }
    return (
        <div className="w-full mt-24 flex justify-center">``
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="size-8 animate-spin text-zinc-500" />
                <h3 className="font-semibold text-xl">Logging in...</h3>
                <p>You will be redirected automatically</p>
            </div>
        </div>
    )
}