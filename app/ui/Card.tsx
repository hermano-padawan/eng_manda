/* eslint-disable @next/next/no-img-element -- preserves original printable asset bytes */
import Link from "next/link";
import type { ColoringPage } from "../data";
export default function Card({
  item,
  priority = false,
}: {
  item: ColoringPage;
  priority?: boolean;
}) {
  return (
    <Link className="drawing-card" href={`/coloring-pages/${item.slug}`}>
      <span className="drawing-image">
        <img
          src={item.image}
          width="800"
          height="800"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          alt={`${item.title} printable coloring page`}
        />
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </span>
      <strong>{item.title}</strong>
      <small>{item.short}</small>
    </Link>
  );
}
