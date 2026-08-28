export const site = {
  name: "ColoryBee",
  domain: "https://colorybee.site",
  spanishDomain: "https://dibulisto.site",
  description:
    "Free printable coloring pages and mandalas for kids, families, classrooms, and relaxing creative breaks.",
} as const;

export function absoluteUrl(path: string) {
  const url = new URL(path, site.domain);
  const finalSegment = url.pathname.split("/").at(-1) ?? "";
  if (url.pathname !== "/" && !url.pathname.endsWith("/") && !finalSegment.includes(".")) {
    url.pathname += "/";
  }
  return url.toString();
}
