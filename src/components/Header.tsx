import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_amadeus_survivor.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/simulador-vuelos", label: "Vuelos" },
  { to: "/simulador-hoteles", label: "Hoteles" },
  { to: "/simulador-coches", label: "Coches" },
  { to: "/pack", label: "Pack" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Amadeus Survivor" className="h-9 w-9 rounded" />
          <span className="font-mono text-lg font-bold tracking-tight text-gradient-neon">AMADEUS SURVIVOR</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-mono transition-colors rounded-sm ${
                location.pathname === link.to
                  ? "text-terminal-cyan bg-terminal-cyan/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-mono rounded-sm transition-colors ${
                location.pathname === link.to
                  ? "text-terminal-cyan bg-terminal-cyan/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {`> ${link.label}`}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
