import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextSeoProps } from "next-seo";
import { CUSTOM_FACEBOOK_FIELD_REQUIRED_APP_ID_NAME } from "./schema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: include types of generated tina schema so we can replace "any" with the real type for the seo page props
export function getNextSeoProps(tinaCmsSeoPageProps: any): NextSeoProps {
  return {
    ...tinaCmsSeoPageProps,
    facebook: {
      appId:
        tinaCmsSeoPageProps?.facebook?.[
          CUSTOM_FACEBOOK_FIELD_REQUIRED_APP_ID_NAME
          ]
    }
  };
}

export const extractDate = (dateString: string | number | Date) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// export default async function fetcher<JSON = any>(
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<JSON> {
//   const res = await fetch(input, init);
//   return res.json();
// }