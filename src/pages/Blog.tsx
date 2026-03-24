import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const placeholderPosts = [
  { slug: "que-es-amadeus", title: "¿Qué es Amadeus y por qué es importante?", date: "Próximamente" },
  { slug: "comandos-basicos-amadeus", title: "Comandos básicos de Amadeus que todo agente debe conocer", date: "Próximamente" },
  { slug: "como-crear-pnr", title: "Cómo crear un PNR paso a paso", date: "Próximamente" },
];

const Blog = () => (
  <div>
    <SEOHead
      title="Blog – Amadeus Survivor | Formación GDS y Amadeus"
      description="Artículos sobre Amadeus, GDS, comandos y formación para agentes de viajes. Aprende con guías prácticas y tutoriales."
      keywords="blog amadeus, tutoriales amadeus, comandos gds, formacion agentes viajes blog"
    />

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <p className="font-mono text-sm text-terminal-dim mb-4">{"> blog.list()"}</p>
        <h1 className="font-mono text-3xl md:text-5xl font-bold text-foreground terminal-glow mb-8">
          Blog
        </h1>

        <div className="space-y-4">
          {placeholderPosts.map((post) => (
            <article key={post.slug} className="terminal-card p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-5 w-5 text-terminal-dim shrink-0 mt-1" />
                <div>
                  <h2 className="font-mono text-lg text-foreground mb-1">{post.title}</h2>
                  <p className="text-xs text-muted-foreground font-mono">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-terminal-dim">{"// Más artículos próximamente..."}</p>
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
