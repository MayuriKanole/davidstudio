import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { socials } from "@/lib/studio-data";
import { StudioButton } from "./StudioButton";

const links = [
  { label: "Games", to: "/games" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled || !home ? "site-header-solid" : ""}`}>
        <Link to="/" className="brand" aria-label="David's Studio home">
          <img src={logo.url} alt="" /><span>DAVID'S STUDIO</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeProps={{ className: "nav-active" }}>{link.label}</Link>
          ))}
        </nav>
        <StudioButton
          variant="icon"
          className="menu-trigger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </StudioButton>
      </header>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link, index) => <Link key={link.to} to={link.to}><span>0{index + 1}</span>{link.label}</Link>)}
          <Link to="/privacy"><span>05</span>Privacy</Link>
        </nav>
      )}
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-brand"><img src={logo.url} alt="" /><span>DAVID'S STUDIO</span></div>
        <div className="footer-nav">
          {links.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="footer-socials">
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href={socials.itch} target="_blank" rel="noreferrer">itch.io</a>
        </div>
        <p>© 2026 David's Studio — All rights reserved.</p>
      </footer>
    </div>
  );
}