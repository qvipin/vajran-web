const services = [
  {
    number: "01",
    title: "Custom Web Architecture",
    description:
      "Production ready web applications built with Next.js, React, and TypeScript. No templates or page builders. Just clean, scalable code.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    number: "02",
    title: "Interface & Interaction Design",
    description:
      "High fidelity UI design with attention to typography, spacing, and motion. We create visual systems that feel polished and intentional.",
    tags: ["UI Design", "Motion", "Design Systems", "Figma"],
  },
  {
    number: "03",
    title: "User Experience Strategy",
    description:
      "User journey mapping, wireframing, and conversion optimization. We design the flow before we design the interface.",
    tags: ["UX Research", "Wireframing", "Prototyping", "Analytics"],
  },
  {
    number: "04",
    title: "SaaS & App Development",
    description:
      "Full stack web software including authentication, databases, APIs, and admin dashboards. Everything your application needs to function.",
    tags: ["Databases", "Auth", "APIs", "Dashboards"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Hosting, CI/CD pipelines, and infrastructure management. Our team includes certified cloud associates with experience across AWS, Azure, and GCP.",
    tags: ["AWS", "Azure", "GCP", "CI/CD"],
  },
  {
    number: "06",
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization, semantic markup, and technical SEO. We build fast sites that rank well and convert visitors.",
    tags: ["Core Web Vitals", "SEO", "Optimization", "Accessibility"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b border-border">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            04 — Services
          </span>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-xl">
              Everything you need to
              <span className="italic text-muted-foreground"> ship.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm lg:text-right">
              From concept to deployment, we handle the full stack so you can focus on your business.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-background p-8 md:p-10"
            >
              <span className="text-xs text-muted-foreground">{service.number}</span>
              <h3 className="font-serif text-xl md:text-2xl mt-3 mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
