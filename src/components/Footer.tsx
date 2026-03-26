import { Link } from "react-router-dom";
import logo from "@/assets/logo_amadeus_survivor.png";

const Footer = () => (
  <footer className="border-t border-border bg-background mt-auto">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Amadeus Survivor" className="h-8 w-8 rounded" />
            <span className="font-mono font-bold text-gradient-neon">AMADEUS SURVIVOR</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Simuladores prácticos de Amadeus para agentes de viajes. Practica sin usar el sistema real.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm text-terminal-cyan mb-4">{"// SIMULADORES"}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/simulador-vuelos" className="text-muted-foreground hover:text-terminal-green transition-colors">Simulador Vuelos</Link></li>
            <li><Link to="/simulador-hoteles" className="text-muted-foreground hover:text-terminal-green transition-colors">Simulador Hoteles</Link></li>
            <li><Link to="/simulador-coches" className="text-muted-foreground hover:text-terminal-green transition-colors">Simulador Coches</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-sm text-terminal-cyan mb-4">{"// ENLACES"}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="text-muted-foreground hover:text-terminal-green transition-colors">Sobre el proyecto</Link></li>
            <li><Link to="/contacto" className="text-muted-foreground hover:text-terminal-green transition-colors">Contacto</Link></li>
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
