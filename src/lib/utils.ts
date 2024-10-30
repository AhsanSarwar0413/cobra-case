import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(price);
}


export function constructMetadata({
  title = "CaseCobra - high-quality phone cases",
  description = "Create customize high-quality phone cases in just few seconds",
  image = "/thumbnail.png",
  icons = '/favicon.ico',
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ahsansarwar",
    },
    icons,
    metadataBase: new URL("https://case-cobra-bay.vercel.app/"),
  }
}