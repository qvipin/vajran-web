import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] border-b border-border">
      <div className="container-main h-full">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2">
          {/* Left - Content */}
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tight">
              We build what
              <br />
              <span className="italic text-muted-foreground">you dream.</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              No templates. No agencies. Just raw code and intentional design.
              We turn your vision into a product that ships.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Start a Project
              </a>
              <a
                href="#manifesto"
                className="btn btn-ghost text-muted-foreground hover:text-foreground group"
              >
                Read Manifesto
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:block relative border-l border-border">
            <Image
              src="/frontpage.png"
              alt="Abstract architecture"
              aria-label="Photo by Phil Desforges on Unsplash"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-background/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
