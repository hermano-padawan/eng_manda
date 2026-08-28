import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../ui/Header";
import Breadcrumbs from "../../../ui/Breadcrumbs";
import Card from "../../../ui/Card";
import { categories, getCategory, getPagesByCategory } from "../../../data";
import { absoluteUrl } from "../../../config";
export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const url = `/coloring-pages/category/${category.slug}/`;
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: category.title,
      description: category.description,
    },
  };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getPagesByCategory(slug);
  const url = `/coloring-pages/category/${category.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: category.title,
        description: category.description,
        url: absoluteUrl(url),
      },
      {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl(`/coloring-pages/${item.slug}`),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Coloring pages",
            item: absoluteUrl("/coloring-pages"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category.title,
            item: absoluteUrl(url),
          },
        ],
      },
    ],
  };
  return (
    <>
      <Header />
      <main className="shell">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
          { label: "Coloring pages", href: "/coloring-pages" },
            { label: category.title },
          ]}
        />
        <section className="page-intro">
          <p className="eyebrow">{items.length} free printables</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </section>
        <div className="card-grid catalogue">
          {items.map((item, index) => (
            <Card item={item} key={item.slug} priority={index < 6} />
          ))}
        </div>
        <section className="tip-panel">
          <h2>A simple coloring idea</h2>
          <p>{category.tip}</p>
          <p>
            Print on standard Letter or A4 paper and choose “fit to page” in
            your printer settings.
          </p>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </main>
    </>
  );
}
