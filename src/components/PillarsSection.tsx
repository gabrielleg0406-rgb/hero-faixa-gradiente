import { Puzzle, Bot, Code2, BarChart3 } from "lucide-react"

const pillars = [
  {
    icon: Puzzle,
    title: "Lorem Ipsum",
    items: ["Lorem", "Ipsum", "Dolor"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  },
  {
    icon: Bot,
    title: "Dolor Sit Amet",
    items: ["Sit", "Amet", "Consectetur"],
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    icon: Code2,
    title: "Consectetur Elit",
    items: ["Adipiscing", "Elit", "Sed"],
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    icon: BarChart3,
    title: "Tempor Incididunt",
    items: ["Labore", "Dolore", "Magna"],
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
]

export default function PillarsSection() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Lorem ipsum</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Lorem ipsum dolor sit amet
            <br />
            <span className="gradient-text">consectetur adipiscing elit</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pillar.description}</p>

                <div className="flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
