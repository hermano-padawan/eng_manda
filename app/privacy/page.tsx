import type { Metadata } from "next";
import ContentPage from "../ui/ContentPage";
import { site } from "../config";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ColoryBee privacy policy.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy">
      <p className="updated">Last updated: August 13, 2026</p>
      <p>
        ColoryBee is designed to be useful without requiring visitors to create
        an account or provide personal information.
      </p>
      <h2>Technical data</h2>
      <p>
        Our hosting provider may process standard technical logs, including IP
        address, browser type, requested page, and time of access, to operate
        and protect the website.
      </p>
      <h2>Messages</h2>
      <p>
        If you contact us by email, we use the information you provide only to
        respond to your message and handle the request.
      </p>
      <h2>Cookies</h2>
      <p>
        ColoryBee does not currently use advertising or profiling cookies. If
        this changes, this policy and any required consent controls will be
        updated first.
      </p>
      <h2>Your questions</h2>
      <p>
        Contact <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>{" "}
        with privacy questions.
      </p>
    </ContentPage>
  );
}
