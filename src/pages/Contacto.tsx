import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().trim().email("Introduce un email válido").max(255),
  message: z.string().trim().min(1, "El mensaje no puede estar vacío").max(2000, "Máximo 2000 caracteres"),
});

const Contacto = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse({ email, message });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Mensaje enviado", description: "Gracias por contactarnos. Te responderemos pronto." });
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <SEOHead
        title="Contacto – Amadeus Survivor"
        description="Contacta con el equipo de Amadeus Survivor. Envíanos tus dudas sobre los simuladores de Amadeus."
        keywords="contacto amadeus survivor, soporte simulador amadeus"
      />

      <section className="py-16 md:py-24">
        <div className="container max-w-xl">
          <p className="font-mono text-sm text-terminal-dim mb-4">{"> contact.open()"}</p>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-gradient-neon mb-8">
            Contacto
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-sm text-terminal-cyan">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="font-mono bg-card border-terminal-cyan/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-cyan/60"
              />
              {errors.email && <p className="text-xs text-destructive font-mono">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-sm text-terminal-cyan">Mensaje</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                rows={6}
                className="font-mono bg-card border-terminal-cyan/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-cyan/60"
              />
              {errors.message && <p className="text-xs text-destructive font-mono">{errors.message}</p>}
            </div>

            <Button type="submit" className="font-mono gap-2 w-full bg-terminal-green/20 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/30">
              Enviar mensaje <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
