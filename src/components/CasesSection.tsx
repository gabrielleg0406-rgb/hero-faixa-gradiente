import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    tag: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet consectetur",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    metric: "+320%",
    metricLabel: "Lorem ipsum",
  },
  {
    tag: "Dolor sit",
    title: "Consectetur adipiscing elit sed do eiusmod",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    metric: "-65%",
    metricLabel: "Dolor sit amet",
  },
  {
    tag: "Amet consectetur",
    title: "Tempor incididunt ut labore et dolore",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    metric: "+12k",
    metricLabel: "Consectetur",
  },
]

export default function CasesSection() {
  return (
    <section id="casos" className="relative py-24 md:py-32 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Lorem ipsum</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Lorem ipsum <span className="gradient-text">dolor sit amet</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {c.tag}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{c.description}</p>

              <div className="pt-6 border-t border-border">
                <p className="text-3xl font-bold gradient-text">{c.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.metricLabel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
