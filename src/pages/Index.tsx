import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane, Hotel, Car, Monitor, Target, Users, ShieldCheck,
  Clock, BookOpen, Play, ChevronRight, ExternalLink, Zap, Lock, Rocket,
  Terminal, Activity, Radio
} from "lucide-react";
import logoVuelos from "@/assets/logo_vuelos.png";
import logoCoches from "@/assets/logo_coches.png";
import logoHoteles from "@/assets/logo_hoteles.png";

const HOTMART_URL = "https://hotmart.com/es/marketplace"; // placeholder

const modules = [
  {
    icon: Plane,
    image: logoVuelos,
    title: "VUELOS / GDS",
    subtitle: "Agencia en Cuarentena",
    desc: "Aprende a crear un PNR básico de vuelos: disponibilidad, reserva, datos de pasajero, emisión.",
    to: "/simulador-vuelos",
    color: "cyan" as const,
  },
  {
    icon: Car,
    image: logoCoches,
    title: "ALQUILER / CARS",
    subtitle: "Simulador de Alquiler",
    desc: "Domina la reserva de coches: disponibilidad, categorías, tarifas y confirmación de reservas.",
    to: "/simulador-coches",
    color: "blue" as const,
  },
  {
    icon: Hotel,
    image: logoHoteles,
    title: "HOSPEDAJE / HOTEL",
    subtitle: "Gestión de Hospedaje",
    desc: "Practica reservas de hotel: búsqueda de disponibilidad, tarifas, confirmación y modificaciones.",
    to: "/simulador-hoteles",
    color: "violet" as const,
  },
];

const colorMap = {
  cyan: {
    border: "border-terminal-cyan/30",
    borderHover: "hover:border-terminal-cyan",
    text: "text-terminal-cyan",
    bg: "bg-terminal-cyan/5",
    bgHover: "hover:bg-terminal-cyan/10",
    btn: "bg-terminal-cyan/15 border border-terminal-cyan/40 text-terminal-cyan hover:bg-terminal-cyan/25 hover:border-terminal-cyan/70",
    glow: "hover:shadow-[0_0_25px_hsl(180_100%_50%/0.15),0_0_50px_hsl(180_100%_50%/0.08)]",
    dot: "bg-terminal-cyan",
    line: "bg-terminal-cyan/20",
  },
  blue: {
    border: "border-terminal-blue/30",
    borderHover: "hover:border-terminal-blue",
    text: "text-terminal-blue",
    bg: "bg-terminal-blue/5",
    bgHover: "hover:bg-terminal-blue/10",
    btn: "bg-terminal-blue/15 border border-terminal-blue/40 text-terminal-blue hover:bg-terminal-blue/25 hover:border-terminal-blue/70",
    glow: "hover:shadow-[0_0_25px_hsl(220_100%_60%/0.15),0_0_50px_hsl(220_100%_60%/0.08)]",
    dot: "bg-terminal-blue",
    line: "bg-terminal-blue/20",
  },
  violet: {
    border: "border-terminal-violet/30",
    borderHover: "hover:border-terminal-violet",
    text: "text-terminal-violet",
    bg: "bg-terminal-violet/5",
    bgHover: "hover:bg-terminal-violet/10",
    btn: "bg-terminal-violet/15 border border-terminal-violet/40 text-terminal-violet hover:bg-terminal-violet/25 hover:border-terminal-violet/70",
    glow: "hover:shadow-[0_0_25px_hsl(270_80%_65%/0.15),0_0_50px_hsl(270_80%_65%/0.08)]",
    dot: "bg-terminal-violet",
    line: "bg-terminal-violet/20",
  },
};

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

    {/* HERO — System Boot Screen */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 crt-scanlines pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      {/* Decorative corner brackets */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-terminal-green/30 pointer-events-none" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-terminal-green/30 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-terminal-green/30 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-terminal-green/30 pointer-events-none" />

      <div className="container relative z-10 max-w-4xl text-center">
        {/* System status bar */}
        <div className="flex items-center justify-center gap-3 mb-8 font-mono text-xs text-terminal-dim">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-glow" />
            SYSTEM ONLINE
          </span>
          <span className="text-border">│</span>
          <span className="flex items-center gap-1.5">
            <Activity className="h-3 w-3" />
            GDS CONNECTED
          </span>
          <span className="text-border">│</span>
          <span className="flex items-center gap-1.5">
            <Radio className="h-3 w-3" />
            TRAINING MODE
          </span>
        </div>

        <p className="font-mono text-sm text-terminal-dim mb-6 animate-typing overflow-hidden whitespace-nowrap mx-auto max-w-fit">
          {"> system.boot(\"amadeus_survivor\")"}
        </p>

        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gradient-neon">
          Simuladores prácticos de Amadeus para agentes de viajes
        </h1>

        <div className="inline-block terminal-border rounded px-4 py-1.5 mb-8">
          <p className="font-mono text-xs text-terminal-green tracking-widest uppercase animate-pulse-glow">
            ● Central de Simulación GDS — Modo entrenamiento activo
          </p>
        </div>

        <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10">
          Practica vuelos, hoteles y coches sin usar el sistema real.
          <br />
          <span className="text-terminal-cyan font-medium">Entrena antes de entrar en turno.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="font-mono text-base bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30 hover:border-terminal-green hover:shadow-[0_0_20px_hsl(150_100%_50%/0.2)]">
            <Link to="/pack">▶ Ver simuladores</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono text-base gap-2 border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 hover:border-terminal-cyan hover:shadow-[0_0_20px_hsl(180_100%_50%/0.15)]">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
              Comprar ahora <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* QUÉ ES — System Info Panel */}
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-4xl">
        <div className="terminal-border rounded-md p-6 md:p-8 relative">
          <div className="absolute top-0 left-4 -translate-y-1/2 bg-background px-3">
            <span className="font-mono text-xs text-terminal-dim tracking-wider">SYSTEM_INFO</span>
          </div>
          <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-6">{"// QUÉ ES AMADEUS SURVIVOR"}</h2>
          <p className="text-secondary-foreground text-lg mb-6 max-w-3xl">
            Este proyecto ofrece simuladores prácticos para aprender Amadeus escribiendo comandos,
            resolviendo misiones y practicando situaciones reales de agencia.
          </p>
          <div className="font-mono text-sm">
            <p className="text-terminal-dim mb-3">{"// Pensado para:"}</p>
            <ul className="space-y-2">
              {audiences.map((a, i) => (
                <li key={i} className="flex items-center gap-2 pl-2 border-l border-terminal-green/20">
                  <ChevronRight className="h-3 w-3 text-terminal-cyan shrink-0" />
                  <span className="text-secondary-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* MÓDULOS — Module Selection Screen */}
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />
      <div className="container max-w-5xl relative z-10">
        {/* Terminal header frame */}
        <div className="terminal-border-glow rounded-md p-1 mb-10">
          <div className="bg-background rounded-sm p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-terminal-green" />
              <p className="font-mono text-xs text-terminal-dim tracking-[0.3em] uppercase">
                A M A D E U S &nbsp; S U R V I V O R
              </p>
              <Terminal className="h-4 w-4 text-terminal-green" />
            </div>
            <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-1">SELECCIÓN DE MÓDULO</h2>
            <p className="text-muted-foreground text-sm font-mono">Elige tu campo de batalla</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map(({ image, title, subtitle, desc, to, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={to}
                className={`relative rounded-md border ${c.border} ${c.borderHover} ${c.bg} ${c.glow} transition-all duration-300 group overflow-hidden`}
              >
                {/* Module status indicator */}
                <div className={`h-0.5 w-full ${c.line}`}>
                  <div className={`h-full w-1/3 ${c.dot} animate-pulse-glow`} />
                </div>

                <div className="p-5">
                  {/* Module header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[10px] ${c.text} tracking-wider opacity-60`}>MODULE</span>
                    <span className={`inline-flex items-center gap-1 font-mono text-[10px] ${c.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse-glow`} />
                      READY
                    </span>
                  </div>

                  {/* Logo */}
                  <div className={`w-full aspect-[4/3] rounded overflow-hidden mb-4 border ${c.border} bg-background/50`}>
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                  </div>

                  <h3 className={`font-mono text-lg font-bold ${c.text} mb-1`}>{title}</h3>
                  <p className="text-[11px] text-muted-foreground font-mono mb-3 tracking-wide">{subtitle}</p>
                  <p className="text-sm text-muted-foreground flex-1 mb-5 leading-relaxed">{desc}</p>

                  <div className="flex flex-col gap-2">
                    <Button asChild size="sm" className={`font-mono ${c.btn} transition-shadow`}>
                      <Link to={to}>▶ ENTRAR</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="font-mono gap-1 border-border text-foreground hover:bg-secondary">
                      <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
                        Comprar <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CÓMO FUNCIONA — Process Steps */}
    <section className="py-16 md:py-20 relative">
      <div className="container max-w-4xl">
        <div className="terminal-border rounded-md p-1 mb-10">
          <div className="bg-background rounded-sm p-3 text-center">
            <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon">{"// CÓMO FUNCIONA"}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center terminal-card p-5 relative group hover:border-terminal-cyan/40 transition-colors">
              <span className="absolute top-2 right-3 font-mono text-[10px] text-terminal-dim">0{i + 1}</span>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded bg-terminal-cyan/10 border border-terminal-cyan/20 mb-4">
                <Icon className="h-6 w-6 text-terminal-cyan" />
              </div>
              <h3 className="font-mono text-sm text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PARA QUIÉN ES */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-8">{"// PARA QUIÉN ES"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <div key={i} className="flex items-center gap-3 terminal-card p-4 border-l-2 border-l-terminal-violet/50 hover:border-l-terminal-violet transition-colors">
              <Users className="h-5 w-5 text-terminal-violet shrink-0" />
              <span className="text-secondary-foreground text-sm">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* VÍDEO */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-8">{"// DEMO"}</h2>
        <div className="aspect-video terminal-card flex items-center justify-center border-terminal-cyan/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full border border-terminal-cyan/30 bg-terminal-cyan/5 mx-auto mb-4">
              <Play className="h-8 w-8 text-terminal-dim" />
            </div>
            <p className="font-mono text-sm text-muted-foreground">Espacio para vídeo demo</p>
            <p className="text-xs text-muted-foreground mt-1">Inserta aquí tu URL de YouTube</p>
          </div>
        </div>
      </div>
    </section>

    {/* VENTAJAS */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-10 text-center">{"// VENTAJAS"}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {advantages.map(({ icon: Icon, text }, i) => (
            <div key={i} className="text-center terminal-card p-5 hover:border-terminal-green/30 transition-colors group">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded bg-terminal-green/5 border border-terminal-green/15 mb-3 group-hover:border-terminal-green/30 transition-colors">
                <Icon className="h-5 w-5 text-terminal-green" />
              </div>
              <p className="font-mono text-sm text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA FINAL */}
    <section className="py-20 md:py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
      <div className="absolute inset-0 crt-scanlines pointer-events-none" />
      <div className="container max-w-2xl relative z-10">
        <div className="terminal-border-glow rounded-md p-8 md:p-12 bg-background/80 backdrop-blur-sm">
          <h2 className="font-mono text-2xl md:text-4xl text-gradient-neon mb-4">
            {">"} Entrena antes de tu primer turno
          </h2>
          <p className="text-muted-foreground mb-8">
            Empieza a practicar con los simuladores de Amadeus hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-mono text-base bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30 hover:shadow-[0_0_20px_hsl(150_100%_50%/0.2)]">
              <Link to="/pack">Ver simuladores</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono text-base gap-2 border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/10 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.15)]">
              <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer">
                Comprar en Hotmart <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-terminal-dim">v 3.0.0 // multi-module platform // secure link established</p>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
