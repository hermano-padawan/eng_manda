/* eslint-disable @next/next/no-img-element -- local print assets are already optimized WebP files */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "./ui/Header";
import Card from "./ui/Card";
import { categories, coloringPages } from "./data";

const description =
  "Browse 52 free printable coloring pages, including animal pictures, floral designs, geometric mandalas, fantasy scenes, and relaxing printables.";
export const metadata: Metadata = {
  title: "Free Printable Coloring Pages",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Free Printable Coloring Pages | ColoryBee",
    description,
  },
};

export default function Home() {
  const popular = [
    "capybara-with-flowers",
    "bees-and-sunflowers-mandala",
    "floral-cat-mandala",
    "fairy-garden-mandala",
    "whale-and-ocean-mandala",
    "books-and-flowers",
  ].map((slug) => coloringPages.find((item) => item.slug === slug)!);
  const newest = coloringPages.slice(-6).reverse();
  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Print • color • enjoy</p>
            <h1>Free coloring pages for bright little moments.</h1>
            <p>
              Pick a page, print it at home, and make it yours. Explore animals,
              flowers, cozy scenes, fantasy worlds, and mandalas for every mood.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/coloring-pages">
                Browse all coloring pages
              </Link>
              <Link className="text-link" href="/mandalas">
                Explore mandalas <span>→</span>
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="sun-shape" />
            <img
              src="/coloring-pages/bees-and-sunflowers-mandala-coloring-page.webp"
              width="800"
              height="800"
              alt=""
            />
            <span className="bee bee-one">●</span>
            <span className="bee bee-two">●</span>
          </div>
        </section>
        <section className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Reader favorites</p>
              <h2>Popular coloring pages</h2>
            </div>
            <Link href="/coloring-pages">
              View all <span>→</span>
            </Link>
          </div>
          <div className="card-grid">
            {popular.map((item, index) => (
              <Card item={item} key={item.slug} priority={index < 3} />
            ))}
          </div>
        </section>
        <section className="category-band">
          <div className="shell">
            <div className="section-heading light">
              <div>
                <p className="eyebrow">Find your favorite</p>
                <h2>Browse by category</h2>
              </div>
            </div>
            <div className="category-grid">
              {categories.map((category) => {
                const hero = coloringPages.find(
                  (item) => item.slug === category.hero,
                )!;
                return (
                  <Link
                    href={`/coloring-pages/category/${category.slug}`}
                    className="category-card"
                    key={category.slug}
                  >
                    <img
                      src={hero.image}
                      width="800"
                      height="800"
                      loading="lazy"
                      alt=""
                    />
                    <span>
                      <strong>{category.title}</strong>
                      <small>{category.short}</small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Just added</p>
              <h2>New printable pages</h2>
            </div>
          </div>
          <div className="card-grid">
            {newest.map((item) => (
              <Card item={item} key={item.slug} />
            ))}
          </div>
        </section>
        <section className="intro-panel shell">
          <div>
            <p className="eyebrow">Made for real coloring time</p>
            <h2>Simple to choose. Easy to print.</h2>
          </div>
          <div>
            <p>
              Every ColoryBee page is a high-quality black-and-white design with
              clear lines and comfortable spaces. Open any picture, print it on
              A4 or Letter paper, and start coloring.
            </p>
            <p>
              Our collection includes easy pages for kids, detailed mandalas for
              adults, and plenty of designs families and classrooms can enjoy
              together.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
