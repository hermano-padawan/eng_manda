"use client";
export default function Actions({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const share = async () => {
    const data = { title, url: location.href };
    if (navigator.share) await navigator.share(data);
    else await navigator.clipboard.writeText(location.href);
  };
  return (
    <div className="actions">
      <button onClick={() => window.print()}>Print coloring page</button>
      <a
        className="secondary"
        href={image}
        download={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.webp`}
      >
        Download image
      </a>
      <button
        className="icon-button"
        onClick={share}
        aria-label="Share this coloring page"
      >
        Share
      </button>
    </div>
  );
}
