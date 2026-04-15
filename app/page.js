"use client";
import { useState } from "react";

const BG      = "#F8F7F4";
const BLACK   = "#1A1916";
const BORDER  = "#E2DED8";
const MUTED   = "#9E9A94";
const HOVER   = "#EFEDE8";
const GREEN   = "#2D6A4F";
const AMBER   = "#92400E";

const sites = [
  {
    id: "01",
    name: "VitaStax",
    url: "https://vitastax.com",
    repo: "https://github.com/tderuvo/vitastax-next",
    desc: "Personalised supplement stacks in daily packs. DTC subscription brand built for health-conscious adults.",
    tags: ["Health", "Subscription", "DTC"],
    status: "live",
  },
  {
    id: "02",
    name: "Bayou Squeeze",
    url: "https://bayousqueeze.com",
    repo: "https://github.com/tderuvo/bayousqueeze",
    desc: "Squeezeable Cajun meat paste. A new category — protein as a condiment. Southern-inspired, shelf-stable.",
    tags: ["Food", "CPG", "Brand"],
    status: "building",
  },
  {
    id: "03",
    name: "MentalFu",
    url: "https://meek-truffle-5a0eb5.netlify.app",
    repo: "https://github.com/tderuvo/mentalfu",
    desc: "Kung Fu for your mind. A publishing brand built around practical mental frameworks and a 5-book series.",
    tags: ["Publishing", "Books", "Wellness"],
    status: "live",
  },
];

const statusConfig = {
  live:     { label: "Live",     color: GREEN, bg: "#D1FAE5" },
  building: { label: "Building", color: AMBER, bg: "#FEF3C7" },
  idea:     { label: "Idea",     color: MUTED, bg: HOVER },
};

export default function AllMyStuff() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: BG, padding: "0 0 6rem" }}>

      {/* Header */}
      <header style={{
        maxWidth: 720, margin: "0 auto",
        padding: "4rem 2rem 0",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: "1rem",
          paddingBottom: "2rem",
          borderBottom: `1px solid ${BORDER}`,
        }}>
          <div>
            <h1 style={{
              fontSize: "1rem", fontWeight: 400, letterSpacing: "0.04em",
              color: BLACK, marginBottom: "0.35rem",
            }}>
              all my stuff
            </h1>
            <p style={{ fontSize: "0.78rem", color: MUTED, letterSpacing: "0.02em" }}>
              tony deruvo · things i'm building
            </p>
          </div>
          <div style={{ fontSize: "0.72rem", color: MUTED, textAlign: "right",
            letterSpacing: "0.02em", paddingTop: "0.2rem" }}>
            <div>{sites.length} projects</div>
            <div>{sites.filter(s => s.status === "live").length} live</div>
          </div>
        </div>
      </header>

      {/* List */}
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
        {sites.map((site, i) => {
          const st = statusConfig[site.status];
          const isHovered = hovered === site.id;
          return (
            <div key={site.id}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(site.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.5rem 1fr auto",
                  gap: "1.25rem",
                  alignItems: "start",
                  padding: "1.75rem 0.75rem",
                  borderRadius: 6,
                  background: isHovered ? HOVER : "transparent",
                  transition: "background 0.15s",
                  cursor: "pointer",
                  margin: "0 -0.75rem",
                }}
              >
                {/* Index number */}
                <span style={{
                  fontSize: "0.68rem", color: MUTED,
                  letterSpacing: "0.06em", paddingTop: "0.2rem",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {site.id}
                </span>

                {/* Main content */}
                <div>
                  <div style={{
                    display: "flex", alignItems: "center",
                    gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap",
                  }}>
                    <span style={{
                      fontSize: "0.95rem", fontWeight: 400,
                      color: BLACK, letterSpacing: "0.01em",
                    }}>
                      {site.name}
                    </span>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {site.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: "0.6rem", letterSpacing: "0.08em",
                          textTransform: "uppercase", color: MUTED,
                          border: `1px solid ${BORDER}`,
                          borderRadius: 3, padding: "0.15rem 0.45rem",
                          background: BG,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{
                    fontSize: "0.82rem", color: MUTED,
                    lineHeight: 1.65, letterSpacing: "0.01em",
                    marginBottom: "0.85rem",
                  }}>
                    {site.desc}
                  </p>

                  <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
                    <span style={{
                      fontSize: "0.7rem", color: isHovered ? BLACK : MUTED,
                      letterSpacing: "0.03em",
                      transition: "color 0.15s",
                    }}>
                      {site.url.replace("https://", "")} ↗
                    </span>
                    <a
                      href={site.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        fontSize: "0.7rem", color: MUTED,
                        letterSpacing: "0.03em",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = BLACK}
                      onMouseLeave={e => e.currentTarget.style.color = MUTED}
                    >
                      github ↗
                    </a>
                  </div>
                </div>

                {/* Status */}
                <div style={{
                  fontSize: "0.62rem", letterSpacing: "0.08em",
                  textTransform: "uppercase", fontWeight: 500,
                  color: st.color, background: st.bg,
                  padding: "0.25rem 0.6rem", borderRadius: 3,
                  whiteSpace: "nowrap", marginTop: "0.15rem",
                }}>
                  {st.label}
                </div>
              </a>

              {/* Divider (not after last) */}
              {i < sites.length - 1 && (
                <div style={{ height: 1, background: BORDER, margin: "0 0.75rem" }} />
              )}
            </div>
          );
        })}

        {/* Add new placeholder */}
        <div style={{
          display: "grid", gridTemplateColumns: "2.5rem 1fr",
          gap: "1.25rem", padding: "1.75rem 0.75rem",
          margin: "0 -0.75rem",
          borderTop: `1px solid ${BORDER}`,
        }}>
          <span style={{ fontSize: "0.68rem", color: BORDER, paddingTop: "0.15rem" }}>
            {String(sites.length + 1).padStart(2, "0")}
          </span>
          <span style={{ fontSize: "0.82rem", color: BORDER, letterSpacing: "0.02em" }}>
            next thing...
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        maxWidth: 720, margin: "4rem auto 0",
        padding: "0 2rem",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "0.5rem",
      }}>
        <span style={{ fontSize: "0.68rem", color: BORDER, letterSpacing: "0.04em" }}>
          updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <span style={{ fontSize: "0.68rem", color: BORDER, letterSpacing: "0.04em" }}>
          tderuvo
        </span>
      </footer>

    </div>
  );
}
