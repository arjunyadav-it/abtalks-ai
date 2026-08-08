function Dashboard() {
  const student = {
    name: "Arjun",
    streak: 12,
    completedDays: 12,
    totalDays: 60,
    githubCommits: 12,
    linkedinPosts: 10,
  };

  const progress = Math.round(
    (student.completedDays / student.totalDays) * 100
  );

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        {/* Header */}
        <section className="dashboard-header">
          <p className="dashboard-eyebrow">
            STUDENT DASHBOARD
          </p>

          <h1>
            Keep building,
            <br />
            <span>{student.name}.</span>
          </h1>

          <p className="dashboard-subtitle">
            You're on a {student.streak}-day streak.
            Keep the momentum going.
          </p>
        </section>


        {/* Streak Card */}
        <section className="streak-card">

          <div>
            <p className="streak-label">
              CURRENT STREAK
            </p>

            <h2 className="streak-number">
              {student.streak} days
            </h2>

            <p className="streak-text">
              Don't break the chain.
            </p>
          </div>

          <div className="streak-fire">
            🔥
          </div>

        </section>


        {/* Main Grid */}
        <div className="dashboard-grid">

          {/* Today's Task */}
          <section className="dashboard-card task-card">

            <p className="card-eyebrow">
              TODAY'S TASK
            </p>

            <h2>
              Build a Responsive Profile Card
            </h2>

            <span className="day-tag">
              DAY {student.completedDays}
            </span>

            <p>
              Create a clean and responsive profile card
              using HTML and CSS. Make sure it works
              beautifully on mobile screens.
            </p>

            <div className="task-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>Responsive</span>
            </div>

            <a
              href="/day/12"
              className="task-button"
            >
              Continue Challenge →
            </a>

          </section>


          {/* Progress */}
          <section className="dashboard-card">

            <p className="card-eyebrow">
              CHALLENGE PROGRESS
            </p>

            <div className="progress-info">

              <div>
                <div className="progress-number">
                  Day {student.completedDays}
                </div>

                <p>
                  of {student.totalDays}
                </p>
              </div>

              <div className="progress-percent">
                {progress}%
              </div>

            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <p className="progress-remaining">
              {student.totalDays - student.completedDays} days remaining
            </p>

          </section>

        </div>


        {/* Stats */}
        <section className="dashboard-card progress-card">

          <p className="card-eyebrow">
            YOUR PROOF OF WORK
          </p>

          <div className="stats-grid">

            <div className="stat-box">
              <div className="stat-number">
                {student.githubCommits}
              </div>

              <div className="stat-label">
                GITHUB COMMITS
              </div>
            </div>


            <div className="stat-box">
              <div className="stat-number">
                {student.linkedinPosts}
              </div>

              <div className="stat-label">
                LINKEDIN POSTS
              </div>
            </div>

          </div>

        </section>


        {/* Achievement */}
        <section className="dashboard-card achievement-card">

          <p className="card-eyebrow">
            YOUR ACHIEVEMENT
          </p>

          <div className="achievement-list">

            <div className="achievement">

              <div className="achievement-icon">
                🏆
              </div>

              <span>
                Rising Builder — 12 days completed
              </span>

            </div>

          </div>

        </section>


        {/* AI Help */}
        <section className="dashboard-card achievement-card">

          <p className="card-eyebrow">
            STUCK ON SOMETHING?
          </p>

          <h2>
            Ask ABTalks AI.
          </h2>

          <p>
            Get a hint, understand today's task, or think
            through your idea without getting the complete
            solution.
          </p>

          <a
            href="/talk/12"
            className="task-button"
          >
            Ask AI →
          </a>

        </section>

      </div>
    </main>
  );
}

export default Dashboard;