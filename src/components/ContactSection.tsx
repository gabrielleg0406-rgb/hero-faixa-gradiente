import { ArrowRight, Mail, MessageCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Lorem ipsum</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Lorem ipsum dolor sit amet
              <br />
              <span className="gradient-text">consectetur adipiscing</span>
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-10">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Lorem ipsum
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:lorem@ipsum.com"
                className="inline-flex items-center gap-2 glass rounded-full px-8 py-4 text-base font-medium text-foreground hover:bg-foreground/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                lorem@ipsum.com
              </a>
            </div>

            <div className="mt-10 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span>Consectetur adipiscing elit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
