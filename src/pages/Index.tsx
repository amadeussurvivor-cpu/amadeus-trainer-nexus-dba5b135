import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane, Hotel, Car, Monitor, Target, Users, ShieldCheck,
  Clock, BookOpen, Play, ChevronRight, ExternalLink, Zap, Lock, Rocket
} from "lucide-react";

const HOTMART_URL = "https://hotmart.com/es/marketplace"; // placeholder

const modules = [
  {
    icon: Plane,
    title: "Simulador Vuelos",
    desc: "Aprende a crear un PNR básico de vuelos: disponibilidad, reserva, datos de pasajero, emisión.",
    to: "/simulador-vuelos",
  },
  {
    icon: Hotel,
    title: "Simulador Hoteles",
    desc: "Practica reservas de hotel: búsqueda de disponibilidad, tarifas, confirmación y modificaciones.",
    to: "/simulador-hoteles",
  },
  {
    icon: Car,
    title: "Simulador Coches",
    desc: "Domina la reserva de coches: disponibilidad, categorías, tarifas y confirmación de reservas.",
    to: "/simulador-coches",
  },
];

const steps = [
  { icon: Monitor, title: "Accede online", desc: "Entra desde cualquier navegador, sin instalaciones." },
  { icon: ShieldCheck, title: "Entorno sandbox", desc: "Practica sin riesgo en un entorno simulado seguro." },
  { icon: Target, title: "Misiones guiadas", desc: "Sigue misiones paso a paso para aprender cada comando." },
  { icon: Rocket, title: "Progresa", desc: "Avanza de nivel completando misiones cada vez más complejas." },
];

const audiences = [
  "Agentes de viajes nuevos que empiezan en una agencia",
  "Estudiantes de turismo que necesitan práctica con GDS",
  "Formación interna en agencias de viajes",
  "Personas sin acceso a una licencia de Amadeus",
];

const advantages = [
  { icon: ShieldCheck, text: "Practicar sin riesgo" },
  { icon: BookOpen, text: "Aprender haciendo" },
  { icon: Monitor, text: "Simulador realista" },
  { icon: Clock, text: "Acceso temporal flexible" },
  { icon: Lock, text: "Sin licencia GDS necesaria" },
  { icon: Zap, text: "Resultados inmediatos" },
];

const Index = () => (
  <div>
    <SEOHead
      title="Amadeus Survivor – Simuladores prácticos de Amadeus para agentes de viajes"
      description="Practica vuelos, hoteles y coches en simuladores de Amadeus sin usar el sistema real. Formación práctica GDS para agentes de viajes y estudiantes de turismo."
      keywords="simulador amadeus, curso amadeus, aprender amadeus, gds, formacion agentes de viajes, pnr, reserva vuelos, gds training, amadeus training"
    />

    {/* HERO */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 crt-scanlines pointer-events-none" />
      <div className="container relative z-10 max-w-4xl">
        <p className="font-mono text-sm text-terminal-dim mb-4 animate-typing overflow-hidden whitespace-nowrap">
          {"> system.boot(\"amadeus_survivor\")"}
        </p>
        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-foreground terminal-glow leading-tight mb-6">
          Simuladores prácticos de Amadeus para agentes de viajes
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mb-8">
          Practica vuelos, hoteles y coches sin usar el sistema real.
          <br />
          <span className="text-foreground font-medium">Entrena antes de entrar en turno.</span>
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="font-mono text-base">
            <Link to="/pack">Ver simuladores</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono text-base gap-2 border-primary text-primary hover:bg-primary/10">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
              Comprar ahora <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* QUÉ ES */}
    <section className="py-16 md:py-20 bg-card/50">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-6">{"// QUÉ ES AMADEUS SURVIVOR"}</h2>
        <p className="text-secondary-foreground text-lg mb-6 max-w-3xl">
          Este proyecto ofrece simuladores prácticos para aprender Amadeus escribiendo comandos,
          resolviendo misiones y practicando situaciones reales de agencia.
        </p>
        <div className="font-mono text-sm text-foreground">
          <p className="text-terminal-dim mb-2">{"// Pensado para:"}</p>
          <ul className="space-y-1">
            {audiences.map((a, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-primary" />
                <span className="text-secondary-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* MÓDULOS */}
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-10 text-center">{"// MÓDULOS DISPONIBLES"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map(({ icon: Icon, title, desc, to }) => (
            <div key={to} className="terminal-card p-6 flex flex-col">
              <Icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-mono text-lg text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-6">{desc}</p>
              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" size="sm" className="font-mono border-border text-foreground hover:bg-secondary">
                  <Link to={to}>Ver más</Link>
                </Button>
                <Button asChild size="sm" className="font-mono gap-1">
                  <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
                    Comprar <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CÓMO FUNCIONA */}
    <section className="py-16 md:py-20 bg-card/50">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-10 text-center">{"// CÓMO FUNCIONA"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-sm bg-primary/10 border border-primary/30 mb-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-mono text-sm text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PARA QUIÉN ES */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-8">{"// PARA QUIÉN ES"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <div key={i} className="flex items-center gap-3 terminal-card p-4">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <span className="text-secondary-foreground text-sm">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VÍDEO */}
    <section className="py-16 md:py-20 bg-card/50">
      <div className="container max-w-3xl text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-8">{"// DEMO"}</h2>
        <div className="aspect-video terminal-card flex items-center justify-center">
          <div className="text-center">
            <Play className="h-16 w-16 text-terminal-dim mx-auto mb-4" />
            <p className="font-mono text-sm text-muted-foreground">Espacio para vídeo demo</p>
            <p className="text-xs text-muted-foreground mt-1">Inserta aquí tu URL de YouTube</p>
          </div>
        </div>
      </div>
    </section>

    {/* VENTAJAS */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-foreground mb-10 text-center">{"// VENTAJAS"}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, text }, i) => (
            <div key={i} className="text-center">
              <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-mono text-sm text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="py-20 md:py-28 bg-card/50 text-center">
      <div className="container max-w-2xl">
        <h2 className="font-mono text-2xl md:text-4xl text-foreground terminal-glow mb-4">
          {">"} Entrena antes de tu primer turno
        </h2>
        <p className="text-muted-foreground mb-8">
          Empieza a practicar con los simuladores de Amadeus hoy mismo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="font-mono text-base">
            <Link to="/pack">Ver simuladores</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono text-base gap-2 border-primary text-primary hover:bg-primary/10">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
              Comprar en Hotmart <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
