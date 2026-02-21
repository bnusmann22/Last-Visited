function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Designed for clarity</p>
          <h1>A lightweight three-page layout with clear IA and easy placeholders.</h1>
          <p className="lede">
            This demo site showcases strong visual hierarchy, accessible navigation, and
            scannable sections. Replace the copy and imagery when real content arrives.
          </p>
          <div className="hero-actions">
            <button className="cta">View the prototype</button>
            <button className="ghost">Download brief</button>
          </div>
          <div className="hero-metrics">
            <div>
              <p className="metric">03</p>
              <p className="metric-label">Pages</p>
            </div>
            <div>
              <p className="metric">07</p>
              <p className="metric-label">Heuristic checks</p>
            </div>
            <div>
              <p className="metric">01</p>
              <p className="metric-label">Unified theme</p>
            </div>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="panel-card">
            <p className="panel-title">Page Flow</p>
            <div className="panel-grid">
              <div>
                <p className="panel-label">Home</p>
                <p className="panel-value">Arrival + intent</p>
              </div>
              <div>
                <p className="panel-label">About</p>
                <p className="panel-value">Context + trust</p>
              </div>
              <div>
                <p className="panel-label">Main Stuff</p>
                <p className="panel-value">Core features</p>
              </div>
            </div>
          </div>
          <div className="panel-card accent">
            <p className="panel-title">Heuristic checklist</p>
            <ul>
              <li>Clear page labels</li>
              <li>Consistent CTA language</li>
              <li>Readable contrast and spacing</li>
              <li>Responsive layout</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Quick read</p>
          <h2>What visitors should understand in the first minute.</h2>
        </div>
        <div className="about-grid">
          <article>
            <h3>Clear message</h3>
            <p>Define what the product is in one sentence and repeat it in key areas.</p>
          </article>
          <article>
            <h3>Strong proof</h3>
            <p>Show quick proof points, testimonials, or numbers to build trust.</p>
          </article>
          <article>
            <h3>Next step</h3>
            <p>Offer a primary action and a low-commitment alternative.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home
