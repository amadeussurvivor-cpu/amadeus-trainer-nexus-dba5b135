import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, ExternalLink, Monitor, Mail, Clock, Terminal } from "lucide-react";

type ColorTheme = "cyan" | "blue" | "violet";

const themeClasses: Record<ColorTheme, { icon: string; border: string; borderHover: string; heading: string; btn: string; glow: string }> = {
  cyan: {
    icon: "text-terminal-cyan",
    border: "border-terminal-cyan/20",
    borderHover: "border-terminal-cyan/20 hover:border-terminal-cyan/50",
    heading: "text-terminal-cyan",
    btn: "bg-terminal-cyan/20 border border-terminal-cyan/50 text-terminal-cyan hover:bg-terminal-cyan/30",
    glow: "text-terminal-cyan",
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
  description: string;
  features: string[];
  missions: string[];
  hotmartUrl: string;
  colorTheme?: ColorTheme;
}

const SimuladorPage = ({
  module,
  title,
  seoTitle,
  seoDescription,
  seoKeywords,
  description,
  features,
  missions,
  hotmartUrl,
  colorTheme = "cyan",
}: SimuladorPageProps) => {
  const theme = themeClasses[colorTheme];

  return (
    <div>
      <SEOHead title={seoTitle} description={seoDescription} keywords={seoKeywords} />

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
        <div className="container max-w-4xl relative z-10">
          <p className="font-mono text-sm text-terminal-dim mb-4">{`> module.load("${module}")`}</p>
          <h1 className={`font-mono text-3xl md:text-5xl font-bold ${theme.glow} mb-6`}>
            {title}
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Características */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <h2 className={`font-mono text-xl md:text-2xl ${theme.heading} mb-8`}>{"// CARACTERÍSTICAS"}</h2>
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

      {/* Misiones */}
      <section className="py-12">
        <div className="container max-w-4xl">
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

      {/* Avisos */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <h2 className="font-mono text-xl md:text-2xl text-terminal-amber mb-8">{"// AVISOS IMPORTANTES"}</h2>
          <div className="space-y-4">
            {[
              { icon: AlertTriangle, text: "Este simulador NO es oficial de Amadeus IT Group." },
              { icon: Clock, text: "El acceso es temporal desde la fecha de activación." },
              { icon: Monitor, text: "Se recomienda usar desde un PC para la mejor experiencia." },
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
          <Button asChild size="lg" className={`font-mono text-base gap-2 ${theme.btn}`}>
            <a href={hotmartUrl} target="_blank" rel="noopener noreferrer">
              Comprar en Hotmart <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SimuladorPage;
