import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
export default function ContentPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="shell content-page">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}
