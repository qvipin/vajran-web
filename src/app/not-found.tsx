import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center px-6">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        Error 404
      </span>
      <h1 className="mt-4 font-serif text-6xl md:text-8xl text-center">
        Lost<span className="italic text-muted-foreground">.</span>
      </h1>
      <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn-primary group">
          Back to Home
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
