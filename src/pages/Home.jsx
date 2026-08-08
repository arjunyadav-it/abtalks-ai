function Home() {

  return (
    <>

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            THE CONVERSATION CONTINUES
          </p>

          <h1>
            Come for the
            <br />
            <i>story.</i>
            <br />
            Stay for the human.
          </h1>

          <p className="hero-description">
            Raw conversations. Unexpected questions.
            The person behind the title.
          </p>

          <div className="hero-buttons">

            <a href="/explore" className="primary-btn">
              ▶ Explore conversations
            </a>

            <button className="secondary-btn">
              ✦ Discover ABtalks
            </button>

          </div>

          <div className="hero-meta">

            #ABtalks Original

            <span>•</span>

            Real conversations

            <span>•</span>

            Human stories

          </div>

        </div>

      </section>


      <section className="intro">

        <p className="eyebrow">
          WATCH DIFFERENTLY
        </p>

        <h2>
          Conversations that
          <br />
          <i>stay with you.</i>
        </h2>

        <p className="intro-text">
          #ABtalks brings you closer to the people behind
          the headlines. Listen beyond the obvious.
        </p>

        <a
          href="/explore"
          className="explore-link"
        >
          Explore conversations →
        </a>

      </section>


      <section className="feature">

        <div className="feature-image">

          <div className="play-button">
            ▶
          </div>

        </div>

        <div className="feature-content">

          <p className="eyebrow">
            LATEST CONVERSATION
          </p>

          <h2>
            Beyond the
            <br />
            <i>headline.</i>
          </h2>

          <p>
            Every person has a story that doesn't fit
            inside a headline. Discover the questions,
            experiences and moments that reveal who
            they really are.
          </p>

          <a
            href="/explore"
            className="primary-btn"
          >
            Watch latest episode
          </a>

        </div>

      </section>


      <footer>

        <div className="footer-logo">
          <span>#</span>ABtalks
        </div>

        <p>
          Human stories. Unfiltered conversations.
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 ABtalks Redesign · Hackathon Project
        </small>

      </footer>

    </>
  );
}

export default Home;