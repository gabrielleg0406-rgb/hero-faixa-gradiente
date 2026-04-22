import { Check } from "lucide-react"

const points = [
  "Lorem ipsum dolor sit amet consectetur",
  "Adipiscing elit sed do eiusmod tempor",
  "Incididunt ut labore et dolore magna",
  "Aliqua ut enim ad minim veniam quis",
]

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Lorem ipsum</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              Lorem ipsum <span className="gradient-text">dolor sit amet</span> consectetur
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "100+", label: "Lorem ipsum" },
              { value: "10+", label: "Dolor sit" },
              { value: "98%", label: "Amet consectetur" },
              { value: "24/7", label: "Adipiscing elit" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/30 transition-colors"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
