"use client";
import { useState } from "react";

const sites = [
  {
    id: "01",
    name: "Bayou Squeeze",
    url: "https://reliable-liger-81a606.netlify.app",
    desc: "Squeezeable Cajun meat paste. A new category — protein as a condiment. Southern-inspired, shelf-stable.",
    status: "building",
  },
  {
    id: "02",
    name: "Branded Messaging",
    url: "https://brandedmessaging.com",
    desc: "The human-friendly side of RCS — verified, rich, branded business messaging across North America.",
    status: "building",
  },
  {
    id: "03",
    name: "Burn My Secret",
    url: "https://burnmysecret.com",
    desc: "Share a secret that self-destructs after it's read. Private, ephemeral, one-time messages.",
    status: "live",
  },
  {
    id: "04",
    name: "MentalFu",
    url: "https://mentalfu.netlify.app",
    desc: "Kung Fu for your mind. A publishing brand built around practical mental frameworks and a 5-book series.",
    status: "live",
  },
  {
    id: "05",
    name: "RoadGhost Systems",
    url: "https://roadghost-systems.netlify.app",
    desc: "Advanced multi-spectral concealment and battlefield deception platforms for distributed air operations in contested environments.",
    status: "live",
  },
  {
    id: "06",
    name: "The Workout Bible",
    url: "https://the-workout-bible.netlify.app",
    desc: "A visual bodyweight workout poster system for adults who want to get back into shape — no equipment, no confusion, no gym pressure.",
    status: "live",
  },
  {
    id: "07",
    name: "Tony DeRuvo",
    url: "https://tonyderuvo.com",
    desc: "Personal site. Builder, creator, entrepreneur — a home for everything I'm working on and thinking about.",
    status: "live",
  },
  {
    id: "08",
    name: "VitaStax",
    url: "https://www.vitastax.com",
    desc: "Personalised supplement stacks in daily packs. DTC subscription brand built for health-conscious adults.",
    status: "live",
  },
  {
    id: "09",
    name: "NYK Decoder",
    url: "https://nyk-decoder.netlify.app",
    desc: "A secret-keyword-gated web proxy. Enter the right word and browse privately through a server-side proxy — the target site never sees your IP.",
    status: "live",
  },
  {
    id: "10",
    name: "Mimi & Coco",
    url: "https://mimi-coco.netlify.app",
    desc: "Italian-Canadian heritage fragrance and lifestyle brand. Four signature scents, curated objects, and the Art of Living — quiet luxury for modern North American women.",
    status: "live",
  },
  {
    id: "11",
    name: "Guitaraoke",
    url: "https://guitaraoke.netlify.app",
    desc: "Karaoke for guitarists. Upload a song, paste a ChordPro chart, and play along with synced lyrics and chord diagrams — then export a karaoke video.",
    status: "building",
  },
  {
    id: "12",
    name: "WristWalker",
    url: "https://wristwalker.netlify.app",
    desc: "Wrist-mounted dog leash system for city dog owners who want secure control when distractions happen. Premium DTC storefront — four colorways, one mission.",
    status: "live",
  },
  {
    id: "13",
    name: "Riffarama",
    url: "https://riffarama.netlify.app",
    desc: "YouTube karaoke for guitarists. Paste ChordPro lyrics, tap to sync them to any YouTube backing track, and watch chords scroll in real time as you play.",
    status: "live",
  },
  {
    id: "14",
    name: "The Shpacones",
    url: "https://shpacones.netlify.app",
    desc: "A recording recovered. Cinematic archive site for a fictional late-70s rock band — Echoes From The Past. Film grain, tape hiss, analog warmth.",
    status: "building",
  },
  {
    id: "15",
    name: "Driftarama",
    url: "https://driftarama.netlify.app",
    desc: "A lightweight place to hold everything on your mind — so you don't have to. Drop anything in before it slips, and pick up the thread when you're ready.",
    status: "live",
  },
  {
    id: "16",
    name: "FloofIt",
    url: "https://floofit.netlify.app",
    desc: "Write it. Floof it. Let it fly. A playful send-it-out ritual tool — type a wish, goal, thought, or tiny hope and watch it float away into the digital sky.",
    status: "live",
  },
  {
    id: "17",
    name: "PodForge",
    url: "https://podforge-fa29.onrender.com",
    desc: "Convert an MP3 podcast + cover image into a 1920×1080 MP4 for YouTube. Drag, drop, render — no cloud accounts, no upload limits.",
    status: "live",
  },
  {
    id: "18",
    name: "Italian Card Games",
    url: "https://italiancard.netlify.app/play-scopa-online",
    desc: "Play classic Italian card games free in your browser. Start with Scopa — the beloved 40-card capture game — no download or account needed.",
    status: "live",
  },
];

export default function AllMyStuff() {
  const [alpha, setAlpha] = useState(false);
  const displayed = alpha
    ? [...sites].sort((a, b) => a.name.localeCompare(b.name))
    : sites;

  return (
    <div style={{ minHeight: "100vh", background: "#f4f0e4" }}>
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "3rem 1.25rem 5rem",
      }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#aaa",
            marginBottom: "0.9rem",
          }}>
            tony deruvo / index
          </div>
          <h1 style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}>
            all my stuff<span className="cursor">_</span>
          </h1>
          <div style={{
            fontSize: "0.7rem",
            color: "#aaa",
            marginTop: "0.75rem",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}>
            <span>
              {sites.length} projects &mdash;&nbsp;
              {sites.filter(s => s.status === "live").length} live,&nbsp;
              {sites.filter(s => s.status === "building").length} building
            </span>
            <button
              className={`sort-btn${alpha ? " active" : ""}`}
              onClick={() => setAlpha(a => !a)}
              title={alpha ? "Back to original order" : "Sort A–Z"}
            >
              A–Z
            </button>
          </div>
        </div>

        {/* Site list */}
        <div>
          {displayed.map((site) => (
            <a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link"
            >
              <div className="site-name">
                {site.name}
                {site.status === "building" && (
                  <span className="site-status">wip</span>
                )}
              </div>
              <div className="site-desc">{site.desc}</div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "3rem",
          fontSize: "0.65rem",
          color: "#bbb",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>
          tderuvo &middot; {new Date().getFullYear()}
        </div>

      </div>
    </div>
  );
}
