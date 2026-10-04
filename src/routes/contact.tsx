import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { StudioButton } from "@/components/StudioButton";
import { socials } from "@/lib/studio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — David's Studio" },
    { name: "description", content: "Contact David's Studio for player feedback, development collaboration, or publishing conversations." },
    { property: "og:title", content: "Contact — David's Studio" },
    { property: "og:description", content: "Let's build something great together." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-lead">
        <p className="eyebrow">Get in touch</p>
        <h1>LET'S BUILD<br />SOMETHING.</h1>
        <p>Whether you are a player with feedback, a developer interested in collaboration, or a publisher exploring partnerships — we would like to hear from you.</p>
      </section>
      <section className="contact-grid">
        <div className="contact-details">
          <a href="mailto:davidsstudio225@gmail.com"><span>Email</span>davidsstudio225@gmail.com <ArrowUpRight /></a>
          <a href="tel:+917897007421"><span>Phone</span>+91 7897007421 <Phone /></a>
          <a href={socials.map} target="_blank" rel="noreferrer"><span>Location</span>Lucknow, Uttar Pradesh, India <MapPin /></a>
          <div className="contact-socials">
            <a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a href={socials.instagram} target="_blank" rel="noreferrer"><Instagram /> Instagram</a>
            <a href={socials.itch} target="_blank" rel="noreferrer">itch.io</a>
          </div>
        </div>
        <form className="contact-form" action="mailto:davidsstudio225@gmail.com" method="post" encType="text/plain">
          <div className="form-row"><label>First Name<input name="firstName" required /></label><label>Last Name<input name="lastName" required /></label></div>
          <label>Email Address<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows={6} required /></label>
          <StudioButton type="submit">Send Message <ArrowUpRight /></StudioButton>
        </form>
      </section>
    </div>
  );
}