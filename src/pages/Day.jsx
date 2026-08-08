function Day() {
  const day = 12;

  return (
    <main className="day-page">

      {/* Header */}
      <section className="day-header">

        <p className="eyebrow">
          DAY {day} / 60
        </p>

        <h1>
          Build.
          <br />
          <i>Show your work.</i>
        </h1>

        <p className="day-intro">
          One focused task. One more step toward becoming a better builder.
        </p>

      </section>


      {/* Today's Challenge */}
      <section className="day-challenge">

        <p className="card-label">
          TODAY'S CHALLENGE
        </p>

        <h2>
          Build a Responsive Profile Card
        </h2>

        <span className="day-badge">
          DAY {day}
        </span>

        <p className="challenge-description">
          Create a clean and responsive profile card using HTML and CSS.
          Make sure it works beautifully on mobile screens.
        </p>


        {/* Goal */}
        <div className="challenge-block">

          <p className="card-label">
            THE GOAL
          </p>

          <p>
            Build a profile card that looks professional on both
            desktop and mobile screens.
          </p>

        </div>


        {/* What to Build */}
        <div className="challenge-block">

          <p className="card-label">
            WHAT TO BUILD
          </p>

          <ul className="build-list">
            <li>Use HTML for the structure</li>
            <li>Use CSS for styling</li>
            <li>Make the card responsive</li>
            <li>Include a profile image, name and short bio</li>
            <li>Use clean spacing and typography</li>
          </ul>

        </div>

      </section>


      {/* Proof of Work */}
      <section className="proof-card">

        <p className="card-label">
          PROOF OF WORK
        </p>

        <h2>
          Built it? Show it.
        </h2>

        <p>
          Submit your work publicly to keep your challenge streak alive.
        </p>

        <div className="proof-buttons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="proof-btn github-btn"
          >
            <span>GitHub</span>
            <strong>Commit →</strong>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="proof-btn linkedin-btn"
          >
            <span>LinkedIn</span>
            <strong>Post →</strong>
          </a>

        </div>

      </section>


      {/* Completion */}
      <section className="completion-card">

        <div className="completion-icon">
          ✓
        </div>

        <div>
          <p className="card-label">
            DAY {day}
          </p>

          <h2>
            Keep the streak alive.
          </h2>

          <p>
            Complete today's task and submit your proof of work.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Day;