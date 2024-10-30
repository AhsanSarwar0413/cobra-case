import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function PreviewPage({
    searchParams
}: {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}) {
    const { id } = searchParams;
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!id || typeof id !== "string") return notFound();

    const configuration = await db.configuration.findUnique({
        where: { id },
    });

    if (!configuration) return notFound();
    return (
        <>
            <DesignPreview configuration={configuration} user={user} />
        </>
    )
}