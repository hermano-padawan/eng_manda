/* eslint-disable @next/next/no-img-element -- printable assets must not be transformed */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../ui/Header";
import Breadcrumbs from "../../ui/Breadcrumbs";
import Actions from "../../ui/Actions";
import Card from "../../ui/Card";
import { coloringPages, getCategory, getPage, getRelated } from "../../data";
import { absoluteUrl, site } from "../../config";
export function generateStaticParams() {
  return coloringPages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPage(slug);
  if (!item) return {};
  const title = `${item.title} Coloring Page`;
  const description = `Download and print this ${item.title.toLowerCase()} coloring page. ${item.description}`;
  const url = `/coloring-pages/${item.slug}/`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(url),
        es: item.spanishUrl,
        "x-default": absoluteUrl(url),
      },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: item.image,
          width: 800,
          height: 800,
          alt: `${item.title} coloring page`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.image],
    },
  };
}
export default async function ColoringPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPage(slug);
  if (!item) notFound();
  const category = getCategory(item.category)!;
  const related = getRelated(item);
  const url = `/coloring-pages/${item.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${item.title} Coloring Page`,
        url: absoluteUrl(url),
        inLanguage: "en-US",
        description: item.description,
        primaryImageOfPage: { "@id": `${absoluteUrl(url)}#image` },
      },
      {
        "@type": "ImageObject",
        "@id": `${absoluteUrl(url)}#image`,
        name: `${item.title} coloring page`,
        caption: item.description,
        contentUrl: absoluteUrl(item.image),
        encodingFormat: "image/webp",
        representativeOfPage: true,
        creditText: site.name,
        copyrightNotice: `© ${new Date().getFullYear()} ${site.name}. Personal, family, and non-commercial educational use.`,
        creator: { "@type": "Organization", name: site.name, url: site.domain },
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
            item: absoluteUrl(`/coloring-pages/category/${category.slug}`),
          },
          {
            "@type": "ListItem",
            position: 4,
            name: item.title,
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
        <div className="print-brand">
          <span>ColoryBee</span>
          <small>colorybee.site</small>
        </div>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
          { label: "Coloring pages", href: "/coloring-pages" },
            {
              label: category.title,
            href: `/coloring-pages/category/${category.slug}`,
            },
            { label: item.title },
          ]}
        />
        <article className="detail">
          <div className="detail-copy">
            <p className="eyebrow">Free printable</p>
            <h1>{item.title} coloring page</h1>
            <p>{item.description}</p>
            <Actions image={item.image} title={item.title} />
            <dl>
              <div>
                <dt>Format</dt>
                <dd>Square image, ideal for A4 or Letter paper</dd>
              </div>
              <div>
                <dt>Use</dt>
                <dd>Personal, family, and non-commercial classroom use</dd>
              </div>
            </dl>
          </div>
          <figure>
            <img
              src={item.image}
              width="800"
              height="800"
              decoding="async"
              alt={`${item.title} black-and-white printable coloring page`}
            />
            <figcaption>{item.title} printable coloring sheet</figcaption>
          </figure>
        </article>
        <section className="how-to">
          <div>
            <p className="eyebrow">Coloring notes</p>
            <h2>Ideas for this page</h2>
          </div>
          <p>
            {category.tip} Start with the main subject, then work outward
            through the smaller details. Colored pencils are great on everyday
            paper; markers work best on a heavier sheet.
          </p>
        </section>
        <section className="related">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Keep coloring</p>
              <h2>You may also like</h2>
            </div>
            <Link href={`/coloring-pages/category/${category.slug}`}>
              More {category.title.toLowerCase()} <span>→</span>
            </Link>
          </div>
          <div className="card-grid related-grid">
            {related.map((candidate) => (
              <Card item={candidate} key={candidate.slug} />
            ))}
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </main>
    </>
  );
}
