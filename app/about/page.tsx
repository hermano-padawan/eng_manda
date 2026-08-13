import type { Metadata } from "next";
import ContentPage from "../ui/ContentPage";
export const metadata: Metadata = {
  title: "About ColoryBee",
  description:
    "Learn why ColoryBee makes free printable coloring pages for creative time at home and in the classroom.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <ContentPage title="About ColoryBee">
      <p>
        ColoryBee is a growing library of free printable coloring pages made for
        children, families, teachers, and adults who enjoy a quiet creative
        break.
      </p>
      <h2>What you will find here</h2>
      <p>
        Our collection brings together animal pictures, botanical designs, cozy
        everyday scenes, fantasy illustrations, and geometric mandalas. Each
        page is easy to open, download, and print without an account.
      </p>
      <h2>Thoughtful printables</h2>
      <p>
        We favor clear lines, useful categories, honest descriptions, and pages
        that are enjoyable to color. The collection is carefully adapted for
        English-speaking visitors rather than produced as a word-for-word
        translation.
      </p>
    </ContentPage>
  );
}
