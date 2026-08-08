import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="landing-page">

      {/* HERO */}
      <section className="landing-hero">

        <div className="hero-content">

          <p className="eyebrow">
            THE 60-DAY CODING CHALLENGE
          </p>

          <h1>
            Build every day.
            <br />
            <span>Become a better builder.</span>
          </h1>

          <p className="hero-description">
            Pick a track, build something every day, and
            share your progress with the world.
          </p>

          <div className="hero-buttons">

            <Link
              to="/dashboard"
              className="primary-btn"
            >
              Start the challenge →
            </Link>

            <Link
              to="/explore"
              className="secondary-btn"
            >
              Explore ABTalks
            </Link>

          </div>

          <div className="hero-meta">

            60 days

            <span>•</span>

            Daily building

            <span>•</span>

            Public progress

          </div>

        </div>

      </section>


      {/* WHY ABTALKS */}
      <section className="challenge-intro">

        <p className="eyebrow">
          WHY ABTALKS
        </p>

        <h2>
          Don't just learn.
          <br />
          <span>Build in public.</span>
        </h2>

        <p className="intro-text">
          ABTalks helps students turn learning into a daily
          habit. Build something, submit your proof of work,
          and keep your streak alive for 60 days.
        </p>

      </section>


      {/* THREE STEPS */}
      <section className="steps-section">

        <p className="eyebrow">
          HOW IT WORKS
        </p>

        <h2>
          One day.
          <br />
          <span>One build.</span>
        </h2>


        <div className="steps-grid">

          <div className="step-card">

            <span className="step-number">
              01
            </span>

            <h3>
              Pick a task
            </h3>

            <p>
              Get one focused challenge designed to help
              you practice and build something real.
            </p>

          </div>


          <div className="step-card">

            <span className="step-number">
              02
            </span>

            <h3>
              Build it
            </h3>

            <p>
              Spend the day working on your challenge and
              turn what you learn into something tangible.
            </p>

          </div>


          <div className="step-card">

            <span className="step-number">
              03
            </span>

            <h3>
              Show your work
            </h3>

            <p>
              Submit your GitHub commit and LinkedIn post
              to maintain your public learning streak.
            </p>

          </div>

        </div>

      </section>


      {/* CHALLENGE FEATURE */}
      <section className="challenge-feature">

        <div className="challenge-feature-content">

          <p className="eyebrow">
            YOUR PROGRESS
          </p>

          <h2>
            60 days of
            <br />
            <span>showing up.</span>
          </h2>

          <p>
            Track your streak, see today's task, measure
            your progress and celebrate every milestone
            along the way.
          </p>

          <Link
            to="/dashboard"
            className="primary-btn"
          >
            View your dashboard →
          </Link>

        </div>


        <div className="progress-preview">

          <p className="card-label">
            CHALLENGE PROGRESS
          </p>

          <div className="preview-number">
            12
            <span>/ 60</span>
          </div>

          <div className="preview-bar">

            <div
              className="preview-fill"
              style={{ width: "20%" }}
            ></div>

          </div>

          <div className="preview-bottom">

            <span>
              12 day streak
            </span>

            <span>
              20%
            </span>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="final-cta">

        <p className="eyebrow">
          YOUR NEXT BUILD STARTS HERE
        </p>

        <h2>
          Ready to
          <br />
          <span>start building?</span>
        </h2>

        <p>
          One day at a time. One project at a time.
          Sixty days can change how you learn.
        </p>

        <Link
          to="/dashboard"
          className="primary-btn"
        >
          Enter the challenge →
        </Link>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          <span>#</span>ABtalks
        </div>

        <p>
          Build. Share. Keep going.
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 ABtalks Redesign · Hackathon Project
        </small>

      </footer>

    </main>
  );
}

export default Home;