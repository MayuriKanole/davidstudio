import { createFileRoute } from "@tanstack/react-router";

const sections = [
  ["Scope", "This Privacy Policy applies to all games and applications developed and published by David's Studio unless a specific application provides its own privacy policy."],
  ["Information We Collect", "Our games and apps, along with trusted service providers, may automatically collect device information, IP address, advertising identifiers, gameplay events, and diagnostic data."],
  ["Advertising", "Some of our applications display advertisements through third-party providers who may collect device information, advertising identifiers, and approximate location to serve relevant ads."],
  ["Analytics", "We use analytics services to understand how our applications are used, including session duration, feature usage, crash logs, and performance metrics."],
  ["In-App Purchases", "Optional in-app purchases are securely processed by the platform provider. David's Studio does not collect, receive, or store your payment card information."],
  ["Local Data Storage", "Our applications may save game progress, settings, achievements, and preferences locally on your device to improve your experience."],
  ["Third-Party Services", "We may use trusted third-party services including Google Play Services, AdMob, Unity Ads, and Unity Analytics, each operating under their own privacy policies."],
  ["Children's Privacy", "Our applications are designed for a general audience. We do not knowingly collect personal information from children in violation of applicable laws."],
  ["Data Security", "We implement reasonable administrative, technical, and organizational measures to protect your information, though no method of transmission is completely secure."],
  ["Your Privacy Rights", "Depending on your region, you may have rights to access, correct, delete, or restrict processing of your personal information."],
  ["International Data Processing", "Our third-party providers may process information on servers located in different countries in accordance with applicable laws."],
  ["Policy Updates", "We may update this Privacy Policy from time to time. The updated version will always include the latest Effective Date."],
  ["Contact", "If you have questions or concerns about this Privacy Policy or our data practices, please reach out to us."],
] as const;

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — David's Studio" },
    { name: "description", content: "David's Studio privacy policy for its games and applications." },
    { property: "og:title", content: "Privacy Policy — David's Studio" },
    { property: "og:description", content: "How David's Studio handles information across its games and applications." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ]}),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="page-shell privacy-page">
      <header className="page-intro">
        <p className="eyebrow">Privacy · Effective July 9, 2026</p>
        <h1>YOUR PRIVACY<br />MATTERS.</h1>
        <p>David's Studio values your privacy and is committed to transparency about how we collect, use, and protect information when you use our games and applications.</p>
      </header>
      <div className="privacy-list">
        {sections.map(([title, text], index) => <section key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}
      </div>
    </div>
  );
}