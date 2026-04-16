"use client";
import { useState } from "react";

const WHITE  = "#F5F0E8";
const BLACK  = "#0A0A0A";
const RED    = "#D62828";
const BLUE   = "#1B4FD8";
const YELLOW = "#F5C400";
const GRID   = 4; // border thickness

const sites = [
  {
    id: "01",
    name: "Bayou Squeeze",
    url: "https://bayousqueeze.com",
    repo: "https://github.com/tderuvo/bayousqueeze",
    desc: "Squeezeable Cajun meat paste. A new category — protein as a condiment. Southern-inspired, shelf-stable.",
    tags: ["Food", "CPG", "Brand"],
    status: "building",
    color: RED,
  },
  {
    id: "02",
    name: "Branded Messaging",
    url: "https://brandedmessaging.com",
    repo: "https://github.com/tderuvo/brandedmessaging-next",
    desc: "The human-friendly side of RCS — verified, rich, branded business messaging across North America.",
    tags: ["Messaging", "B2B", "RCS"],
    status: "building",
    color: RED,
  },
  {
    id: "03",
    name: "Burn My Secret",
    url: "https://burnmysecret.com",
    repo: "https://github.com/tderuvo/burnmysecret",
    desc: "Share a secret that self-destructs after it's read. Private, ephemeral, one-time messages.",
    tags: ["Privacy", "Tools"],
    status: "live",
    color: RED,
  },
  {
    id: "04",
    name: "MentalFu",
    url: "https://meek-truffle-5a0eb5.netlify.app",
    repo: "https://github.com/tderuvo/mentalfu",
    desc: "Kung Fu for your mind. A publishing brand built around practical mental frameworks and a 5-book series.",
    tags: ["Publishing", "Books", "Wellness"],
    status: "live",
    color: YELLOW,
  },
  {
    id: "05",
    name: "Tony DeRuvo",
    url: "https://tonyderuvo.com",
    repo: "https://github.com/tderuvo/tonyderuvo",
    desc: "Personal site. Builder, creator, entrepreneur — a home for everything I'm working on and thinking about.",
    tags: ["Personal", "Portfolio"],
    status: "live",
    color: BLUE,
  },
  {
    id: "06",
    name: "VitaStax",
    url: "https://vitastax.netlify.app",
    repo: "https://github.com/tderuvo/vitastax-next",
    desc: "Personalised supplement stacks in daily packs. DTC subscription brand built for health-conscious adults.",
    tags: ["Health", "Subscription", "DTC"],
    status: "live",
    color: BLUE,
  },
];

const statusLabel = { live: "LIVE", building: "WIP", idea: "IDEA" };
const statusColor = { live: BLUE, building: RED, idea: YELLOW };

export default function AllMyStuff() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: WHITE }}>

      {/* ── MONDRIAN GRID LAYOUT ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
        border: `${GRID}px solid ${BLACK}`,
      }}>

        {/* ── TOP-LEFT: Big color block with title ── */}
        <div style={{
          background: RED,
          borderRight: `${GRID}px solid ${BLACK}`,
          borderBottom: `${GRID}px solid ${BLACK}`,
          padding: "2.5rem 2rem",
          display: "flex", flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
              marginBottom: "0.75rem" }}>
              Index
            </div>
            <h1 style={{ fontSize: "2.6rem", fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.02em", color: WHITE, textTransform: "uppercase" }}>
              All<br />My<br />Stuff
            </h1>
          </div>
          <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            Tony DeRuvo
          </div>
        </div>

        {/* ── TOP-RIGHT: Yellow stat bar ── */}
        <div style={{
          background: YELLOW,
          borderBottom: `${GRID}px solid ${BLACK}`,
          padding: "2.5rem 3rem",
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <div style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(0,0,0,0.45)",
              marginBottom: "0.5rem" }}>
              Things I'm building
            </div>
            <div style={{ fontSize: "4rem", fontWeight: 900, lineHeight: 1,
              letterSpacing: "-0.04em", color: BLACK }}>
              {sites.length}
            </div>
          </div>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: BLACK, lineHeight: 1 }}>
                {sites.filter(s => s.status === "live").length}
              </div>
              <div style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 4 }}>
                Live
              </div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: BLACK, lineHeight: 1 }}>
                {sites.filter(s => s.status === "building").length}
              </div>
              <div style={{ fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginTop: 4 }}>
                Building
              </div>
            </div>
          </div>
        </div>

        {/* ── LEFT SIDEBAR: Blue block + decorative squares ── */}
        <div style={{
          borderRight: `${GRID}px solid ${BLACK}`,
          display: "grid",
          gridTemplateRows: "1fr 120px 80px",
        }}>
          <div style={{ background: BLUE, borderBottom: `${GRID}px solid ${BLACK}` }} />
          <div style={{ background: YELLOW, borderBottom: `${GRID}px solid ${BLACK}` }} />
          <div style={{ background: WHITE }} />
        </div>

        {/* ── MAIN: Project list ── */}
        <div style={{ background: WHITE }}>
          {sites.map((site, i) => {
            const isHovered = hovered === site.id;
            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(site.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: `${GRID * 2 + 48}px 1fr auto`,
                  borderBottom: i < sites.length - 1 ? `${GRID}px solid ${BLACK}` : "none",
                  background: isHovered ? site.color : WHITE,
                  transition: "background 0.12s",
                  cursor: "pointer",
                  textDecoration: "none",
                  minHeight: 160,
                }}
              >
                {/* Color accent strip + number */}
                <div style={{
                  background: site.color,
                  borderRight: `${GRID}px solid ${BLACK}`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  padding: "1rem 0",
                  transition: "filter 0.12s",
                  filter: isHovered ? "brightness(0.88)" : "none",
                }}>
                  <span style={{ fontSize: "0.62rem", fontWeight: 900,
                    letterSpacing: "0.1em", color: site.color === YELLOW ? BLACK : WHITE,
                    writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {site.id}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "2rem 2.5rem", display: "flex",
                  flexDirection: "column", justifyContent: "center", gap: "0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "center",
                    gap: "1rem", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: "1.4rem", fontWeight: 900,
                      letterSpacing: "-0.02em", textTransform: "uppercase",
                      color: isHovered ? (site.color === YELLOW ? BLACK : WHITE) : BLACK,
                      transition: "color 0.12s",
                    }}>
                      {site.name}
                    </span>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {site.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: "0.55rem", fontWeight: 900,
                          letterSpacing: "0.14em", textTransform: "uppercase",
                          color: isHovered ? (site.color === YELLOW ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)") : "rgba(0,0,0,0.35)",
                          border: `2px solid ${isHovered ? (site.color === YELLOW ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)") : "rgba(0,0,0,0.15)"}`,
                          padding: "0.15rem 0.5rem",
                          transition: "all 0.12s",
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p style={{
                    fontSize: "0.85rem", fontWeight: 400, lineHeight: 1.65,
                    color: isHovered ? (site.color === YELLOW ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.75)") : "rgba(0,0,0,0.55)",
                    maxWidth: 520, transition: "color 0.12s",
                    fontFamily: "Arial, sans-serif",
                  }}>
                    {site.desc}
                  </p>

                  <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.25rem" }}>
                    <span style={{
                      fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em",
                      color: isHovered ? (site.color === YELLOW ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)") : "rgba(0,0,0,0.35)",
                      transition: "color 0.12s",
                    }}>
                      {site.url.replace("https://", "")} ↗
                    </span>
                    <a href={site.repo} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em",
                        color: isHovered ? (site.color === YELLOW ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)") : "rgba(0,0,0,0.35)",
                        transition: "color 0.12s",
                      }}>
                      github ↗
                    </a>
                  </div>
                </div>

                {/* Status badge */}
                <div style={{
                  borderLeft: `${GRID}px solid ${BLACK}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "1.5rem 1.25rem",
                  background: isHovered ? "rgba(0,0,0,0.08)" : statusColor[site.status],
                  transition: "background 0.12s",
                  minWidth: 80,
                }}>
                  <span style={{
                    fontSize: "0.6rem", fontWeight: 900,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    writingMode: "vertical-rl", transform: "rotate(180deg)",
                    color: site.status === "building" && !isHovered ? BLACK : WHITE,
                  }}>
                    {statusLabel[site.status]}
                  </span>
                </div>
              </a>
            );
          })}

          {/* Next thing placeholder */}
          <div style={{
            display: "grid",
            gridTemplateColumns: `${GRID * 2 + 48}px 1fr`,
            borderTop: `${GRID}px solid ${BLACK}`,
            minHeight: 80, opacity: 0.25,
          }}>
            <div style={{ background: BLACK, borderRight: `${GRID}px solid ${BLACK}` }} />
            <div style={{ padding: "1.75rem 2.5rem", display: "flex",
              alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 900,
                letterSpacing: "0.14em", textTransform: "uppercase", color: BLACK }}>
                {String(sites.length + 1).padStart(2, "0")} — next thing...
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM-LEFT: small red square ── */}
        <div style={{
          borderRight: `${GRID}px solid ${BLACK}`,
          borderTop: `${GRID}px solid ${BLACK}`,
          background: RED,
          display: "grid", gridTemplateRows: "1fr 1fr",
        }}>
          <div style={{ borderBottom: `${GRID}px solid ${BLACK}`, background: WHITE }} />
          <div style={{ background: RED }} />
        </div>

        {/* ── BOTTOM-RIGHT: footer ── */}
        <div style={{
          borderTop: `${GRID}px solid ${BLACK}`,
          background: BLACK,
          padding: "1.5rem 3rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 900, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            tderuvo · {new Date().getFullYear()}
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[RED, BLUE, YELLOW].map(c => (
              <div key={c} style={{ width: 12, height: 12, background: c,
                border: `2px solid rgba(255,255,255,0.15)` }} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
