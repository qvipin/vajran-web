export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 md:py-32 border-b border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              02 — The Guarantee
            </span>

            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
              The Vajran
              <br />
              <span className="italic text-muted-foreground">Guarantee.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
              We put our money where our mouth is. If we don&apos;t deliver on time,
              you get a full refund and the project is on us. No questions asked.
            </p>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border p-6 md:p-8">
              <div className="font-serif text-4xl md:text-5xl">100%</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Money Back
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Full refund if we miss the deadline. Period.
              </p>
            </div>

            <div className="border border-border p-6 md:p-8">
              <div className="font-serif text-4xl md:text-5xl">FREE</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Project Delivery
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                You still get your project. On us.
              </p>
            </div>

            <div className="col-span-2 border border-border p-6 md:p-8">
              <div className="flex items-center gap-4">
                <svg
                  className="h-6 w-6 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <div>
                  <div className="font-medium">No Fine Print</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    No excuses. No asterisks. We deliver or you don&apos;t pay. Simple as that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
