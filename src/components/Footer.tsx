import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 terminal-text terminal-glow mb-4">
            <Terminal className="h-5 w-5" />
            <span className="font-mono font-bold">AMADEUS SURVIVOR</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Simuladores prácticos de Amadeus para agentes de viajes. Practica sin usar el sistema real.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm text-foreground mb-4">{"// SIMULADORES"}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/simulador-vuelos" className="text-muted-foreground hover:text-foreground transition-colors">Simulador Vuelos</Link></li>
            <li><Link to="/simulador-hoteles" className="text-muted-foreground hover:text-foreground transition-colors">Simulador Hoteles</Link></li>
            <li><Link to="/simulador-coches" className="text-muted-foreground hover:text-foreground transition-colors">Simulador Coches</Link></li>
            <li><Link to="/pack" className="text-muted-foreground hover:text-foreground transition-colors">Pack Completo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-sm text-foreground mb-4">{"// ENLACES"}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre el proyecto</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Amadeus Survivor. Todos los derechos reservados.</p>
        <p className="mt-1 text-xs">Este proyecto no está afiliado con Amadeus IT Group.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
