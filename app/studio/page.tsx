import Link from "next/link";

const wrap = { width: "min(1120px, calc(100% - 48px))", margin: "0 auto" } as const;
const card = {
  border: "1px solid rgba(103,232,249,0.18)",
  background: "rgba(255,255,255,0.05)",
  borderRadius: 28,
  padding: 28,
} as const;

export default function StudioPage() {
  return (
    <main>
      <header
        style={{
          borderBottom: "1px solid rgba(103,232,249,0.15)",
          position: "sticky",
          top: 0,
          background: "rgba(7,17,31,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ ...wrap, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0" }}>
          <Link href="/" style={{ color: "#67e8f9", fontWeight: 800, letterSpacing: "0.35em" }}>
            DRAFT
          </Link>
          <nav style={{ display: "flex", gap: 20 }}>
            <Link href="/">Home</Link>
            <Link href="/studio">Studio</Link>
          </nav>
        </div>
      </header>

      <section
        style={{
          ...wrap,
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 24,
          minHeight: "70vh",
          alignItems: "end",
          padding: "72px 0",
        }}
      >
        <div>
          <p style={{ color: "#67e8f9", letterSpacing: "0.35em", fontWeight: 700, textTransform: "uppercase", fontSize: 12 }}>
            DRAFT Studio
          </p>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 0.98, maxWidth: "14ch", margin: "0 0 20px" }}>
            Design, motion e performance reunidos numa camada unica.
          </h1>
          <p style={{ maxWidth: 720, lineHeight: 1.9, color: "rgba(248,251,255,0.74)" }}>
            A pagina Studio resume a proposta criativa da marca com uma construcao estatica, leve e pronta para a nova hospedagem.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <Link
              href="/"
              style={{
                background: "#67e8f9",
                color: "#07111f",
                borderRadius: 999,
                padding: "14px 22px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Voltar para Home
            </Link>
          </div>
        </div>

        <div style={{ ...card, boxShadow: "0 0 80px rgba(34,211,238,0.12)" }}>
          <p style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: 13 }}>Entrega</p>
          <ul style={{ paddingLeft: 18, lineHeight: 1.9, color: "rgba(248,251,255,0.72)" }}>
            <li>Teste local antes do push.</li>
            <li>Repositorio pronto para GitHub.</li>
            <li>Compatibilidade com Cloudflare no modelo atual.</li>
          </ul>
        </div>
      </section>

      <section
        style={{
          ...wrap,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          paddingBottom: 80,
        }}
      >
        <article style={card}>
          <h2>Capabilities</h2>
          <p style={{ lineHeight: 1.8, color: "rgba(248,251,255,0.7)" }}>
            Sistemas visuais com pegada cinematografica e base de codigo sustentavel para crescer sem fragilidade no deploy.
          </p>
        </article>
        <article style={card}>
          <h2>Direcao</h2>
          <p style={{ lineHeight: 1.8, color: "rgba(248,251,255,0.7)" }}>
            Uma camada visual forte, objetiva e simples de manter, sem depender da configuracao antiga da hospedagem.
          </p>
        </article>
      </section>
    </main>
  );
}
