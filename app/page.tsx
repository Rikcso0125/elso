import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ padding: "64px 24px", maxWidth: 960, margin: "0 auto" }}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>
          AI‑optimalizált, <span style={{ color: '#eab308' }}>villámgyors</span> weboldalak
        </h1>
        <p style={{ fontSize: 18, opacity: .85 }}>
          Next.js + Vercel + GitHub CI/CD — Framer Motion animációval.
        </p>
      </motion.div>
    </main>
  );
}
