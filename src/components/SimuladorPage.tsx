import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, ExternalLink, Monitor, Mail, Clock, Terminal, Users } from "lucide-react";

type ColorTheme = "cyan" | "blue" | "violet" | "green";

const themeClasses: Record<ColorTheme, { icon: string; border: string; borderHover: string; heading: string; btn: string; glow: string }> = {
  cyan: {
    icon: "text-terminal-cyan",
    border: "border-terminal-cyan/20",
    borderHover: "border-terminal-cyan/20 hover:border-terminal-cyan/50",
    heading: "text-terminal-cyan",
    btn: "bg-terminal-cyan/20 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/30",
    glow: "text-terminal-cyan",
  },
  green: {
    icon: "text-terminal-green",
    border: "border-terminal-green/20",
    borderHover: "border-terminal-green/20 hover:border-terminal-green/50",
    heading: "text-terminal-green",
    btn: "bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30",
    glow: "text-terminal-green",
  },
  blue: {
    icon: "text-terminal-blue",
    border: "border-terminal-blue/20",
    borderHover: "border-terminal-blue/20 hover:border-terminal-blue/50",
    heading: "text-terminal-blue",
    btn: "bg-terminal-blue/20 border border-terminal-blue/50 text-terminal-blue hover:bg-terminal-blue/30",
    glow: "text-terminal-blue",
  },
  violet: {
    icon: "text-terminal-violet",
    border: "border-terminal-violet/20",
    borderHover: "border-terminal-violet/20 hover:border-terminal-violet/50",
    heading: "text-terminal-violet",
    btn: "bg-terminal-violet/20 border border-terminal-violet/50 text-terminal-violet hover:bg-terminal-violet/30",
    glow: "text-terminal-violet",
  },
};

interface SimuladorPageProps {
  module: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  heroIntro: string;
  description: string;
  features: string[];
  howItWorks: string[];
  audiences: string[];
  includes: string[];
  missions?: string[];
  moduleContents?: string[];
  hotmartUrl: string;
  colorTheme?: ColorTheme;
  heroImage?: string;
  underConstruction?: boolean;
}

const SimuladorPage = ({
  module,
  title,
  seoTitle,
  seoDescription,
  seoKeywords,
  heroIntro,
  description,
  features,
  howItWorks,
  audiences,
  includes,
  missions,
  moduleContents,
  hotmartUrl,
  colorTheme = "cyan",
  heroImage,
  underConstruction = false,
}: SimuladorPageProps) => {
  const theme = themeClasses[colorTheme];

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDescription} keywords={seoKeywords} />

      {/* Under Construction Banner */}
      {underConstruction && (
        <section className="pt-16 md:pt-24">
          <div className="container max-w-5xl">
            <div className={`terminal-card p-8 md:p-10 border-2 ${theme.border} text-center`}>
              <p className={`font-mono text-lg md:text-xl font-bold ${theme.glow} mb-4`}>{">"} MÓDULO EN CONSTRUCCIÓN</p>
              <p className="text-secondary-foreground mb-2">Este módulo estará disponible próximamente.</p>
              <p className="text-muted-foreground text-sm">Puedes empezar ya con el módulo de Vuelos.</p>
            </div>
          </div>
        </section>
      )}

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
        <div className="container max-w-5xl relative z-10">
          <div className={`flex ${heroImage ? 'flex-col md:flex-row md:items-center gap-6' : 'flex-col'} mb-6`}>
            {heroImage && (
              <img src={heroImage} alt={`${module} logo`} className="w-60 h-60 md:w-80 md:h-80 object-contain shrink-0" />
            )}
            <div>
              <p className="font-mono text-sm text-terminal-dim mb-4">{`> module.load("${module}")`}</p>
              <h1 className={`font-mono text-3xl md:text-5xl font-bold ${theme.glow} mb-6`}>
                {title}
              </h1>
              <p className="text-lg text-secondary-foreground max-w-2xl whitespace-pre-line">{heroIntro}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// DESCRIPCIÓN"}</h2>
          <div className="terminal-card p-6 border border-border">
            <p className="text-secondary-foreground whitespace-pre-line">{description}</p>
          </div>
        </div>
      </section>

      {/* Qué aprenderás */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// QUÉ APRENDERÁS"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className={`flex items-start gap-3 terminal-card p-4 border ${theme.border}`}>
                <CheckCircle className={`h-5 w-5 ${theme.icon} shrink-0 mt-0.5`} />
                <span className="text-secondary-foreground text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// CÓMO FUNCIONA"}</h2>
          <div className="space-y-3">
            {howItWorks.map((step, i) => (
              <div key={i} className={`flex items-center gap-3 terminal-card p-4 border ${theme.border}`}>
                <Terminal className={`h-4 w-4 ${theme.icon} shrink-0`} />
                <span className="text-sm text-secondary-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misiones */}
      {missions && missions.length > 0 && (
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// MISIONES"}</h2>
            <div className="space-y-3">
              {missions.map((m, i) => (
                <div key={i} className={`flex items-center gap-3 terminal-card-hover p-4 border ${theme.borderHover}`}>
                  <Terminal className={`h-4 w-4 ${theme.icon} shrink-0`} />
                  <span className="font-mono text-sm text-foreground">{`MISIÓN ${i + 1}: ${m}`}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Qué encontrarás en el módulo */}
      {moduleContents && moduleContents.length > 0 && (
        <section className="py-12">
          <div className="container max-w-5xl">
            <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// QUÉ ENCONTRARÁS EN EL MÓDULO"}</h2>
            <div className="space-y-3">
              {moduleContents.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 terminal-card p-4 border ${theme.border}`}>
                  <CheckCircle className={`h-4 w-4 ${theme.icon} shrink-0`} />
                  <span className="text-sm text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Para quién es */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// PARA QUIÉN ES"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <div key={i} className={`flex items-center gap-3 terminal-card p-4 border-l-2 border ${theme.border}`} style={{ borderLeftColor: `hsl(var(--terminal-${colorTheme === 'green' ? 'green' : colorTheme === 'cyan' ? 'cyan' : colorTheme === 'blue' ? 'blue' : 'violet'}) / 0.5)` }}>
                <Users className={`h-5 w-5 ${theme.icon} shrink-0`} />
                <span className="text-secondary-foreground text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incluye */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// INCLUYE"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 terminal-card p-4 border ${theme.border}`}>
                <CheckCircle className={`h-5 w-5 ${theme.icon} shrink-0 mt-0.5`} />
                <span className="text-secondary-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avisos */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <h2 className="font-mono text-xl md:text-2xl text-terminal-amber mb-8">{"// AVISO"}</h2>
          <div className="space-y-4">
            {[
              { icon: AlertTriangle, text: "No es el sistema Amadeus real. Es un simulador para práctica." },
              { icon: Monitor, text: "Este simulador está diseñado para formación. No requiere licencia GDS y no realiza reservas reales." },
              { icon: Clock, text: "El acceso es temporal desde la fecha de activación." },
              { icon: Mail, text: "Recibirás el código de acceso por email tras la compra." },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-md border border-terminal-amber/30 bg-terminal-amber/5">
                <Icon className="h-5 w-5 text-terminal-amber shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />
        <div className="container max-w-2xl relative z-10">
          <h2 className={`font-mono text-2xl md:text-3xl ${theme.glow} mb-6`}>
            {`> INICIAR ${module.toUpperCase()}`}
          </h2>
          <p className="text-muted-foreground mb-8">
            Accede al simulador y empieza a practicar hoy mismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className={`font-mono text-base gap-2 ${theme.btn}`}>
              <a href={hotmartUrl} target="_blank" rel="noopener noreferrer">
                Comprar acceso al simulador <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono text-base gap-2 border-border text-foreground hover:bg-secondary">
              <Link to="/">Volver a la central</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimuladorPage;