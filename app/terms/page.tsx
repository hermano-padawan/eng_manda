import type { Metadata } from "next";
import ContentPage from "../ui/ContentPage";
import EmailReveal from "../ui/EmailReveal";
export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using ColoryBee printable coloring pages.",
  alternates: { canonical: "/terms/" },
};
export default function Terms() {
  return (
    <ContentPage title="Terms of Use">
      <p className="updated">Last updated: August 13, 2026</p>
      <h2>Permitted use</h2>
      <p>
        You may download and print ColoryBee coloring pages for personal,
        family, and non-commercial educational use. Teachers may print copies
        for their own students.
      </p>
      <h2>Not permitted</h2>
      <p>
        You may not sell the files or printed pages, redistribute the original
        digital files, upload them to another website, remove ownership notices,
        or use the artwork in products for sale without written permission.
      </p>
      <h2>Website availability</h2>
      <p>
        We work to keep the website accurate and available, but content may be
        updated, corrected, or removed.
      </p>
      <h2>Contact</h2>
      <p>
        For licensing questions, use our <EmailReveal />.
      </p>
    </ContentPage>
  );
}
