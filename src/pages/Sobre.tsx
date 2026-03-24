import SEOHead from "@/components/SEOHead";
import { Terminal, Target, BookOpen } from "lucide-react";

const Sobre = () => (
  <div>
    <SEOHead
      title="Sobre el proyecto – Amadeus Survivor | Formación práctica GDS"
      description="Amadeus Survivor es un proyecto creado por un agente de viajes con experiencia real en GDS, para ayudar a practicar Amadeus antes de usar el sistema real."
      keywords="sobre amadeus survivor, formacion amadeus, proyecto simulador gds"
    />

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="font-mono text-sm text-terminal-dim mb-4">{"> about.read()"}</p>
        <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground terminal-glow mb-8">
          Sobre el proyecto
        </h1>

        <div className="space-y-8 text-secondary-foreground">
          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-primary" />
              <h2 className="font-mono text-lg text-foreground">Origen</h2>
            </div>
            <p>
              Amadeus Survivor nace de la experiencia real de un agente de viajes que conoce de primera mano
              la dificultad de aprender a usar un GDS sin acceso al sistema real. Muchos profesionales
              empiezan a trabajar en agencias sin haber practicado con terminales reales.
            </p>
          </div>

          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="font-mono text-lg text-foreground">Objetivo</h2>
            </div>
            <p>
              El objetivo es simple: ofrecer una herramienta de práctica donde cualquier persona pueda
              escribir comandos de Amadeus, resolver misiones y aprender de forma guiada antes de
              enfrentarse al sistema real. Sin riesgo, sin licencia, sin presión.
            </p>
          </div>

          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-mono text-lg text-foreground">Filosofía</h2>
            </div>
            <p>
              Creemos que la mejor forma de aprender es haciendo. Los simuladores de Amadeus Survivor
              están diseñados para replicar situaciones reales de agencia: buscar vuelos, crear reservas,
              gestionar hoteles y coches. Formación práctica, directa y sin rodeos.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-sm border border-terminal-amber/30 bg-terminal-amber/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-secondary-foreground">Nota:</strong> Este proyecto no está afiliado con Amadeus IT Group.
              Los simuladores son herramientas de formación independientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Sobre;
