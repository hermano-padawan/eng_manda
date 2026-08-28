import type { Metadata } from "next";
import ContentPage from "../ui/ContentPage";
import EmailReveal from "../ui/EmailReveal";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ColoryBee about its printable coloring pages.",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return (
    <ContentPage title="Contact">
      <p>
        Have a question about a coloring page, usage, or the website? You can
        reach ColoryBee at:
      </p>
      <div className="contact-box">
        <EmailReveal />
      </div>
      <p>
        Please include the URL of the page you are writing about so we can help
        quickly.
      </p>
    </ContentPage>
  );
}
