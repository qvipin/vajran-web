"use client";

import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  socials?: {
    x?: string;
    website?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Vipin",
    role: "Design & Engineering",
    email: "vipin@vajran.com",
    socials: {
      x: "https://x.com/qvipinb",
      website: "https://www.vipin.xyz",
    },
  },
  {
    name: "Abhi",
    role: "Operations & Quality",
    email: "abhi@vajran.com",
  },
  {
    name: "Shourya",
    role: "Strategy & Experience",
    email: "shourya@vajran.com",
    socials: {
      x: "https://x.com/Shourya_Vajran",
    },
  },
];

export default function Trio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="trio" className="py-24 md:py-32 border-b border-border">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              03 — The Trio
            </span>

            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              Started in
              <br />
              <span className="italic text-muted-foreground">AP Gov.</span>
            </h2>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Vajran was just an idea we envisioned in our homeroom class. Three friends who
              believed their skills could help others bring ideas to life.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              We didn&apos;t want to be freelancers chasing gigs. We wanted to be
              builders who curate ideas, turning vaporware into real products that ship.
            </p>
          </div>

          {/* Right - Team */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => {
                const hasSocials = member.socials && (member.socials.x || member.socials.website);
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={member.name}
                    className="border border-border p-6 md:p-8"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="font-serif text-2xl md:text-3xl">{member.name}</div>
                    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {member.role}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors block"
                      >
                        {member.email}
                      </a>

                      {/* Socials: always visible on mobile, fade in on desktop hover */}
                      {hasSocials && (
                        <div
                          className={`mt-4 flex gap-4 transition-opacity duration-200 ${
                            isHovered ? "opacity-100" : "opacity-100 md:opacity-0"
                          }`}
                        >
                          {member.socials?.x && (
                            <a
                              href={member.socials.x}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                            >
                              X →
                            </a>
                          )}
                          {member.socials?.website && (
                            <a
                              href={member.socials.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Website →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
