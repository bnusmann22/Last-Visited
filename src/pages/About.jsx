function About() {
  return (
    <section className="section about">
      <div className="section-header">
        <p className="eyebrow">About</p>
        <h2>Purposeful placeholders with real-world structure.</h2>
      </div>
      <div className="about-grid">
        <article>
          <h3>Why it exists</h3>
          <p>
            This project is a sandbox for layout decisions: typography scale, content
            blocks, and navigation flow. It is intentionally content-light so you can swap
            in final copy quickly.
          </p>
        </article>
        <article>
          <h3>Design heuristics</h3>
          <p>
            The layout favors legible type, predictable CTA placement, and short scan lines.
            Every section begins with a label to reinforce orientation and reduce cognitive
            load.
          </p>
        </article>
        <article>
          <h3>What to replace</h3>
          <p>
            Swap in brand voice, imagery, and metrics. The structure already provides for
            short highlights, longer explanations, and quick bullet summaries.
          </p>
        </article>
      </div>
      <div className="about-grid">
        <article>
          <h3>Team notes</h3>
          <p>Use this block for the origin story, working norms, or design principles.</p>
        </article>
        <article>
          <h3>Scope</h3>
          <p>Clarify where the product fits today and what is coming later.</p>
        </article>
        <article>
          <h3>Audience</h3>
          <p>Summarize the target users so the tone stays consistent across pages.</p>
        </article>
      </div>
    </section>
  )
}

export default About
