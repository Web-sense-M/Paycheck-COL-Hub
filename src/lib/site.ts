export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.paycheckcitycompare.com";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl.replace(/\/$/, "")}${p}`;
}
