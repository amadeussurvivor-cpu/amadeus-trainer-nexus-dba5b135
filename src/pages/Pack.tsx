import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Hotel, Car, ExternalLink, Package, ChevronRight } from "lucide-react";

const HOTMART_URL = "https://hotmart.com/es/marketplace"; // placeholder

const modules = [
  {
    icon: Plane,
    title: "Simulador Vuelos",
    desc: "Crea PNR de vuelos: disponibilidad, reserva, datos de pasajero y emisión.",
    to: "/simulador-vuelos",
    iconColor: "text-terminal-cyan",
    borderColor: "border-terminal-cyan/30 hover:border-terminal-cyan/60",
    btnClass: "bg-terminal-cyan/20 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/30",
  },
  {
    icon: Car,
    title: "Simulador Coches",
    desc: "Domina la reserva de coches: disponibilidad, categorías y confirmación.",
    to: "/simulador-coches",
    iconColor: "text-terminal-blue",
    borderColor: "border-terminal-blue/30 hover:border-terminal-blue/60",
    btnClass: "bg-terminal-blue/20 border border-terminal-blue/50 text-terminal-blue hover:bg-terminal-blue/30",
  },
  {
    icon: Hotel,
    title: "Simulador Hoteles",
    desc: "Gestiona reservas de hotel: búsqueda, tarifas, confirmación y modificaciones.",
    to: "/simulador-hoteles",
    iconColor: "text-terminal-violet",
    borderColor: "border-terminal-violet/30 hover:border-terminal-violet/60",
    btnClass: "bg-terminal-violet/20 border border-terminal-violet/50 text-terminal-violet hover:bg-terminal-violet/30",
  },
];

const Pack = () => (
  <div>
    <SEOHead
      title="Pack Simuladores Amadeus – Vuelos, Hoteles y Coches | Amadeus Survivor"
      description="Accede a todos los simuladores de Amadeus: vuelos, hoteles y coches. Formación práctica completa de GDS para agentes de viajes."
      keywords="pack simulador amadeus, curso amadeus completo, formacion gds completa, simuladores amadeus"
    />

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Package className="h-8 w-8 text-terminal-cyan" />
          <p className="font-mono text-sm text-terminal-dim">{"> pack.list()"}</p>
        </div>
        <h1 className="font-mono text-3xl md:text-5xl font-bold text-gradient-neon mb-6">
          Pack Simuladores Amadeus
        </h1>
        <p className="text-lg text-secondary-foreground max-w-2xl">
          Accede a todos los módulos de simulación disponibles. Practica vuelos, hoteles y coches
          con comandos reales en un entorno seguro.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {modules.map(({ icon: Icon, title, desc, to, iconColor, borderColor, btnClass }) => (
            <div key={to} className={`terminal-card-hover p-6 flex flex-col sm:flex-row items-start gap-6 border ${borderColor}`}>
              <Icon className={`h-12 w-12 ${iconColor} shrink-0`} />
              <div className="flex-1">
                <h2 className={`font-mono text-xl ${iconColor} mb-2`}>{title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm" className="font-mono border-border text-foreground hover:bg-secondary">
                    <Link to={to}>Ver detalles <ChevronRight className="h-3 w-3 ml-1" /></Link>
                  </Button>
                  <Button asChild size="sm" className={`font-mono gap-1 ${btnClass}`}>
                    <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
                      Comprar <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 text-center">
      <div className="container max-w-2xl">
        <p className="font-mono text-sm text-terminal-dim mb-4">{"// Próximamente: Pack completo con descuento"}</p>
        <p className="text-muted-foreground text-sm">
          Estamos preparando un pack con todos los módulos a precio especial. ¡Mantente atento!
        </p>
      </div>
    </section>
  </div>
);

export default Pack;
