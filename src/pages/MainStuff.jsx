function MainStuff() {
  return (
    <section className="section mainstuff">
      <div className="section-header">
        <p className="eyebrow">Main Stuff</p>
        <h2>Core modules arranged for fast comprehension.</h2>
      </div>
      <div className="feature-grid">
        <article>
          <h3>Module One</h3>
          <p>Short supporting text about the primary value users should notice first.</p>
          <button className="ghost">See details</button>
        </article>
        <article>
          <h3>Module Two</h3>
          <p>Secondary value that benefits from a contrasting layout and short CTA.</p>
          <button className="ghost">Explore flow</button>
        </article>
        <article>
          <h3>Module Three</h3>
          <p>Proof points, integrations, or workflow steps can live here.</p>
          <button className="ghost">Open brief</button>
        </article>
      </div>
      <div className="timeline">
        <div>
          <p className="timeline-step">01</p>
          <h4>Scan</h4>
          <p>Visitors understand the narrative in under 30 seconds.</p>
        </div>
        <div>
          <p className="timeline-step">02</p>
          <h4>Commit</h4>
          <p>Primary action uses consistent, direct language.</p>
        </div>
        <div>
          <p className="timeline-step">03</p>
          <h4>Convert</h4>
          <p>Supportive blocks answer the most likely questions.</p>
        </div>
      </div>
    </section>
  )
}

export default MainStuff
