import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Terminal, Shield, Lock, Wifi, CheckCircle } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre no puede estar vacío").max(100),
  email: z.string().trim().email("Introduce un email válido").max(255),
  subject: z.string().trim().min(1, "El asunto no puede estar vacío").max(200),
  message: z.string().trim().min(1, "El mensaje no puede estar vacío").max(2000, "Máximo 2000 caracteres"),
});

const statusLines = [
  { label: "SYSTEM_STATUS", value: "ONLINE", icon: Wifi },
  { label: "ENCRYPTED_CONNECTION", value: "YES", icon: Lock },
  { label: "TARGET_UNIT", value: "SUPPORT_DESK", icon: Shield },
  { label: "PROTOCOL", value: "SECURE_MSG", icon: Terminal },
];

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse({ name, email, subject, message });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);

    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      email: result.data.email,
      subject: result.data.subject,
      message: result.data.message,
    });

    if (error) {
      setSending(false);
      setErrors({ form: "Error al enviar. Inténtalo de nuevo." });
      return;
    }

    try {
      await fetch("https://hook.eu1.make.com/ntsnqfuaisa41vvx475t9mbsjp8k9a5m", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          subject: result.data.subject,
          message: result.data.message,
        }),
      });
    } catch {
      // Webhook failure is non-blocking; the message is already saved in Supabase
    }

    setSending(false);

    setSent(true);
    setName("");
    setEmail("");
    setSubject("");
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
        <div className="container max-w-5xl">
          <p className="font-mono text-sm text-terminal-dim mb-4">{"> secure_terminal.init()"}</p>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-gradient-neon mb-10">
            {">"} TERMINAL DE CONTACTO
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            {/* Side panel — Status Monitor */}
            <aside className="space-y-4">
              <div className="terminal-card border border-terminal-green/30 p-5 rounded-md">
                <p className="font-['VT323',monospace] text-xs text-terminal-green tracking-widest mb-4 uppercase">
                  // SYSTEM MONITOR
                </p>
                <div className="space-y-3">
                  {statusLines.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-2">
                      <Icon className="h-3.5 w-3.5 text-terminal-green shrink-0 mt-0.5" />
                      <div className="font-['VT323',monospace] text-xs leading-tight">
                        <span className="text-terminal-dim">{label}:</span>{" "}
                        <span className="text-terminal-green">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-terminal-green/15">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse-glow" />
                    <span className="font-['VT323',monospace] text-[11px] text-terminal-green tracking-wider">
                      READY FOR INPUT
                    </span>
                  </div>
                </div>
              </div>

              <div className="terminal-card border border-terminal-cyan/20 p-4 rounded-md hidden md:block">
                <p className="font-['VT323',monospace] text-[11px] text-terminal-cyan tracking-wider mb-2">
                  // TRANSMISSION LOG
                </p>
                <div className="font-['VT323',monospace] text-[11px] text-terminal-dim space-y-1">
                  <p>{">"} channel.open()</p>
                  <p>{">"} encryption.verify() ✓</p>
                  <p>{">"} awaiting_input...</p>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="terminal-card border border-terminal-green/20 p-6 md:p-8 rounded-md">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="h-4 w-4 text-terminal-green" />
                <p className="font-['VT323',monospace] text-sm text-terminal-green tracking-wider">
                  SECURE MESSAGE FORM
                </p>
              </div>

              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-terminal-green mx-auto mb-4" />
                  <p className="font-['VT323',monospace] text-lg text-terminal-green tracking-wider mb-2">
                    DATA_SENT_SUCCESSFULLY
                  </p>
                  <p className="font-['VT323',monospace] text-sm text-terminal-dim tracking-wider">
                    ESPERE RESPUESTA.
                  </p>
                  <Button
                    onClick={() => setSent(false)}
                    className="mt-8 font-mono bg-terminal-green/15 border border-terminal-green/40 text-terminal-green hover:bg-terminal-green/25"
                  >
                    {">"} NUEVO MENSAJE
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-['VT323',monospace] text-sm text-terminal-green tracking-wider flex items-center gap-2">
                        <Terminal className="h-3 w-3" /> NOMBRE
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre"
                        className="font-mono bg-background border-terminal-green/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-green/60"
                      />
                      {errors.name && <p className="text-xs text-destructive font-mono">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-['VT323',monospace] text-sm text-terminal-green tracking-wider flex items-center gap-2">
                        <Mail className="h-3 w-3" /> EMAIL
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="font-mono bg-background border-terminal-green/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-green/60"
                      />
                      {errors.email && <p className="text-xs text-destructive font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-['VT323',monospace] text-sm text-terminal-green tracking-wider flex items-center gap-2">
                      <Terminal className="h-3 w-3" /> ASUNTO
                    </Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Asunto del mensaje"
                      className="font-mono bg-background border-terminal-green/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-green/60"
                    />
                    {errors.subject && <p className="text-xs text-destructive font-mono">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-['VT323',monospace] text-sm text-terminal-green tracking-wider flex items-center gap-2">
                      <Terminal className="h-3 w-3" /> MENSAJE
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      rows={6}
                      className="font-mono bg-background border-terminal-green/20 text-foreground placeholder:text-muted-foreground focus:border-terminal-green/60"
                    />
                    {errors.message && <p className="text-xs text-destructive font-mono">{errors.message}</p>}
                  </div>

                  {errors.form && <p className="text-xs text-destructive font-mono">{errors.form}</p>}

                  <Button
                    type="submit"
                    disabled={sending}
                    className="font-['VT323',monospace] gap-2 w-full text-base tracking-wider bg-terminal-green/15 border border-terminal-green/40 text-terminal-green hover:bg-terminal-green/25 hover:border-terminal-green/70 hover:shadow-[0_0_20px_hsl(150_100%_50%/0.15)]"
                  >
                    {sending ? "TRANSMITTING..." : <><Send className="h-4 w-4" /> TRANSMIT_MESSAGE</>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
