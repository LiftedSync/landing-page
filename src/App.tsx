import { Github, Monitor, Users, Play, Download } from "lucide-react";

function App() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        {/* Hero */}
        <section style={styles.hero}>
          <img
            src="/lifted.png"
            alt="LiftedSync logo"
            style={styles.heroLogo}
          />
          <h1 style={styles.heroTitle}>LiftedSync</h1>
          <p style={styles.heroSubtitle}>
            Synchronized video playback across streaming platforms.
            <br />
            Watch together with friends, no matter the distance.
          </p>
          <div style={styles.ctaGroup}>
            <a
              href="https://github.com/orgs/LiftedSync/repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fafafa")
              }
            >
              <Github size={18} />
              View on GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/15pZmqT9yj78ROY9GCblyXOood0mWF0en/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaButton}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fafafa")
              }
            >
              <Download size={18} />
              Download
            </a>
          </div>
          <p style={styles.hobbyNote}>
            A hobby project — to watch content together in sync with friends.
          </p>
        </section>

        {/* Features */}
        <section style={styles.featuresSection}>
          <div style={styles.featuresGrid}>
            <FeatureCard
              icon={<Monitor size={24} />}
              title="Multi-Platform"
              description="Support for YouTube, Crunchyroll, Netflix and Prime Video."
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Room System"
              description="Create or join a room with a simple 4-letter code. Share it and start watching."
            />
            <FeatureCard
              icon={<Play size={24} />}
              title="Synced Playback"
              description="Play, pause, and seek — everyone stays on the same frame, in real time."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#171717",
    color: "#fafafa",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  // Hero
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "120px 24px 80px",
    maxWidth: 560,
  },
  heroLogo: {
    width: 80,
    height: 80,
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: "clamp(36px, 5vw, 56px)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    marginBottom: 20,
    color: "#fafafa",
  },
  heroSubtitle: {
    fontSize: "clamp(16px, 2vw, 18px)",
    lineHeight: 1.6,
    color: "#a3a3a3",
    marginBottom: 36,
  },
  ctaGroup: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fafafa",
    color: "#171717",
    padding: "14px 28px",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 600,
    textDecoration: "none",
    transition: "background-color 0.2s",
    cursor: "pointer",
  },
  hobbyNote: {
    marginTop: 24,
    fontSize: 13,
    color: "#666",
    fontStyle: "italic",
  },

  // Features
  featuresSection: {
    padding: "0 24px 120px",
    maxWidth: 960,
    width: "100%",
    boxSizing: "border-box",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
  },

  // Card
  card: {
    backgroundColor: "#1f1f1f",
    border: "1px solid #333",
    borderRadius: 12,
    padding: "32px 28px",
  },
  cardIcon: {
    color: "#a3a3a3",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
    color: "#fafafa",
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#a3a3a3",
  },
};

export default App;
