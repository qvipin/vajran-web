"use client";

import Link from "next/link";

export default function Header() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-main">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 5 L5 50 L45 95 Z" />
              <path d="M55 5 L95 50 L55 90 Z" opacity="0.4" />
            </svg>
            <span className="font-serif text-lg tracking-wide">VAJRAN</span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#manifesto"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Manifesto
              </a>
              <a
                href="#trio"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Team
              </a>
              <a
                href="#services"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {/* Sun icon - visible in dark mode (to switch to light) */}
              <svg
                className="h-4 w-4 hidden dark:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              {/* Moon icon - visible in light mode (to switch to dark) */}
              <svg
                className="h-4 w-4 block dark:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
