import type { Metadata } from "next";
import Header from "../ui/Header";
import Breadcrumbs from "../ui/Breadcrumbs";
import Card from "../ui/Card";
import { coloringPages } from "../data";
const description =
  "Explore all ColoryBee free printable coloring pages, from animals and flowers to fantasy scenes, cozy pictures, and geometric mandalas.";
export const metadata: Metadata = {
  title: "Free Printable Coloring Pages",
  description,
  alternates: { canonical: "/coloring-pages/" },
};
export default function AllPages() {
  return (
    <>
      <Header />
      <main className="shell">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Coloring pages" }]}
        />
        <section className="page-intro">
          <p className="eyebrow">{coloringPages.length} free printables</p>
          <h1>Free printable coloring pages</h1>
          <p>
            Choose a design for a quiet afternoon, classroom activity, or
            creative break. Every page is free to print for personal, family,
            and educational use.
          </p>
        </section>
        <div className="card-grid catalogue">
          {coloringPages.map((item, index) => (
            <Card item={item} key={item.slug} priority={index < 6} />
          ))}
        </div>
      </main>
    </>
  );
}
