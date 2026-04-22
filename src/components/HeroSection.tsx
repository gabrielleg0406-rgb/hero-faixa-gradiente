import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import EtherealBeamsBackground from "@/components/ui/ethereal-beams-hero"

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* 3D Beams Background */}
      <EtherealBeamsBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none z-[1]" />

      {/* Navbar */}
      <nav className="relative z-20 w-full">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight text-foreground">
            AG <span className="text-primary">LABS</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1">
              {["Início", "Serviços", "Casos", "Sobre", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Falar com especialista
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-foreground z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass border-t border-border/30 z-20">
            <div className="flex flex-col p-6 gap-4">
              {["Início", "Serviços", "Casos", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold mt-2"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Lorem ipsum dolor </span>
            <span className="gradient-text">sit amet consectetur</span>
            <br />
            <span className="text-foreground">adipiscing elit</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Lorem ipsum
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 glass rounded-full px-8 py-4 text-base font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Dolor sit amet
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { value: "100+", label: "Lorem ipsum" },
              { value: "10+", label: "Dolor sit amet" },
              { value: "24/7", label: "Consectetur" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
