import Link from "next/link";
import Header from "./ui/Header";
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="shell not-found">
        <span>404</span>
        <h1>This page flew away.</h1>
        <p>We could not find the coloring page you were looking for.</p>
        <Link className="button" href="/coloring-pages">
          Browse coloring pages
        </Link>
      </main>
    </>
  );
}
