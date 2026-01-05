export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 border-b border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                01 — The Manifesto
              </span>

              <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
                Your idea is worthless
                <br />
                <span className="italic text-muted-foreground">until we build it.</span>
              </h2>

              <div className="mt-8 hidden lg:block">
                <div className="h-24 w-px bg-border" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-8 text-base md:text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Harsh? Maybe. True? Absolutely. You are sitting on a million-dollar concept.
                It keeps you up at night. It&apos;s brilliant. But right now? It&apos;s just a note
                on your phone. It is vaporware. You have the vision, but you have no idea how to execute.
              </p>

              <p className="text-foreground font-medium">
                That is where Vajran comes in.
              </p>

              <p className="text-muted-foreground">
                We don&apos;t want to be your &ldquo;freelancers.&rdquo; We are your engine. We take
                over the heavy lifting so you can focus on the vision. We don&apos;t cheaply hack
                together a prototype. We obsess. We grind. We pour blood, sweat, and tears into
                the repo because we treat your project like our survival depends on it.
              </p>

              <div className="pt-8 border-t border-border">
                <p className="font-serif text-2xl md:text-3xl italic text-foreground">
                  You dream it. We make it dangerous.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Obsession
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We care about details because details compound. If it&apos;s there, it&apos;s there for a reason.
                </p>
              </div>

              <div className="group">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Speed
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We ship quickly with discipline. Fast iteration, clean decisions, no chaos.
                </p>
              </div>

              <div className="group">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Transparency
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clear scope, clear pricing, clear timelines. You always know what is happening and why.
                </p>
              </div>

              <div className="group">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Ownership
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You retain full control of the work. Source, assets, and decisions belong to you from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
