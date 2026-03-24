import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, ExternalLink, Monitor, Mail, Clock, Terminal } from "lucide-react";

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
}: SimuladorPageProps) => (
  <div>
    <SEOHead title={seoTitle} description={seoDescription} keywords={seoKeywords} />

    {/* Hero */}
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />
      <div className="container max-w-4xl relative z-10">
        <p className="font-mono text-sm text-terminal-dim mb-4">{`> module.load("${module}")`}</p>
        <h1 className="font-mono text-3xl md:text-5xl font-bold text-gradient-neon mb-6">
          {title}
        </h1>
        <p className="text-lg text-secondary-foreground max-w-2xl">{description}</p>
      </div>
    </section>

    {/* Características */}
    <section className="py-12">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-xl md:text-2xl text-terminal-cyan mb-8">{"// CARACTERÍSTICAS"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 terminal-card p-4">
              <CheckCircle className="h-5 w-5 text-terminal-green shrink-0 mt-0.5" />
              <span className="text-secondary-foreground text-sm">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Misiones */}
    <section className="py-12">
      <div className="container max-w-4xl">
        <h2 className="font-mono text-xl md:text-2xl text-terminal-cyan mb-8">{"// MISIONES"}</h2>
        <div className="space-y-3">
          {missions.map((m, i) => (
            <div key={i} className="flex items-center gap-3 terminal-card-hover p-4 border border-terminal-green/20">
              <Terminal className="h-4 w-4 text-terminal-green shrink-0" />
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
        <h2 className="font-mono text-2xl md:text-3xl text-gradient-neon mb-6">
          {`> INICIAR ${module.toUpperCase()}`}
        </h2>
        <p className="text-muted-foreground mb-8">
          Accede al simulador y empieza a practicar hoy mismo.
        </p>
        <Button asChild size="lg" className="font-mono text-base gap-2 bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30">
          <a href={hotmartUrl} target="_blank" rel="noopener noreferrer">
            Comprar en Hotmart <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default SimuladorPage;
