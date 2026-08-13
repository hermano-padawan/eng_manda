export const site = {
  name: "ColoryBee",
  domain: "https://colorybee.site",
  spanishDomain: "https://dibulisto.site",
  contactEmail: "dibulisto@atomicmail.io",
  description:
    "Free printable coloring pages and mandalas for kids, families, classrooms, and relaxing creative breaks.",
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, site.domain).toString();
}
