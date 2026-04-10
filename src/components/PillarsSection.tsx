import { Puzzle, Bot, Code2, BarChart3 } from "lucide-react"

const pillars = [
  {
    icon: Puzzle,
    title: "Infraestrutura de IA",
    items: ["Arquitetura", "Banco de dados", "Orquestração"],
    description: "Projetamos a base técnica que sustenta soluções de IA robustas e escaláveis.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    items: ["Atendimento", "Vendas", "Operações"],
    description: "Agentes autônomos que trabalham 24/7, aprendem e evoluem com seu negócio.",
  },
  {
    icon: Code2,
    title: "SaaS & Sistemas",
    items: ["Plataformas", "Dashboards", "APIs"],
    description: "Desenvolvimento de software sob medida com inteligência artificial integrada.",
  },
  {
    icon: BarChart3,
    title: "Automação & Escala",
    items: ["Processos", "Workflows", "Integrações"],
    description: "Automatize operações repetitivas e escale sua empresa com eficiência.",
  },
]

export default function PillarsSection() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nossos pilares</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Construímos a infraestrutura de IA
            <br />
            <span className="gradient-text">por trás de empresas modernas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Quatro áreas de especialização que cobrem toda a jornada de transformação com IA.
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
