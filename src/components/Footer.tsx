export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-xl font-bold tracking-tight text-foreground">
            AG <span className="text-primary">LABS</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#casos" className="hover:text-foreground transition-colors">Casos</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AG Labs. Lorem ipsum.
          </p>
        </div>
      </div>
    </footer>
  )
}
