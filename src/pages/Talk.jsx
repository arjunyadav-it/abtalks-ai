import { useState } from "react";

function Talk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const askAI = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || loading) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmedQuestion,

          // ⭐ Previous conversation AI ko bhej rahe hain
          history: history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      const aiAnswer = data.answer || "No response received.";

      // Show latest answer
      setAnswer(aiAnswer);

      // Save current conversation
      setHistory((prev) => [
        ...prev,
        {
          question: trimmedQuestion,
          answer: aiAnswer,
        },
      ]);

      // Clear input
      setQuestion("");
    } catch (err) {
      console.error("AI Error:", err);

      setError(
        "Unable to connect with the AI right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  const retry = () => {
    if (question.trim()) {
      askAI();
    }
  };

  const clearConversation = () => {
    setQuestion("");
    setAnswer("");
    setError("");
    setHistory([]);
  };

  return (
    <main>
      <section className="talk-section">

        {/* Heading */}
        <div className="talk-heading">
          <p className="eyebrow">ABTALKS AI</p>

          <h1>
            Ask.
            <br />
            <span>Think differently.</span>
          </h1>

          <p className="talk-description">
            Have a conversation with AI about ideas, stories,
            people, relationships or anything that makes you stop
            and think.
          </p>
        </div>

        {/* AI Card */}
        <div className="ai-card">

          {/* Card Header */}
          <div className="ai-card-top">
            <div>
              <span className="status-dot"></span>
              AI CONVERSATION
            </div>

            <span className="model-label">
              Powered by AI
            </span>
          </div>

          {/* Conversation */}
          <div className="conversation-area">

            {/* Conversation History */}
            {history.length > 0 && (
              <div className="history">

                {history.map((item, index) => (
                  <div
                    className="history-item"
                    key={index}
                  >

                    {/* User Question */}
                    <div className="user-question">
                      <span>You</span>
                      <p>{item.question}</p>
                    </div>

                    {/* AI Answer */}
                    <div className="ai-response">
                      <span>ABTALKS AI</span>
                      <p>{item.answer}</p>
                    </div>

                  </div>
                ))}

              </div>
            )}

            {/* Initial State */}
            {history.length === 0 &&
              !loading &&
              !error && (
                <div className="empty-conversation">

                  <div className="big-question">?</div>

                  <h2>What is on your mind?</h2>

                  <p>
                    Ask a question and start a conversation.
                  </p>

                </div>
              )}

            {/* Loading */}
            {loading && (
              <div className="loading-message">

                <div className="loader"></div>

                <p>Thinking...</p>

              </div>
            )}

            {/* Error */}
            {error && !loading && (
              <div className="error-message">

                <p>{error}</p>

                <button
                  className="retry-button"
                  onClick={retry}
                >
                  Try Again
                </button>

              </div>
            )}

          </div>

          {/* Input */}
          <div className="input-area">

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something interesting..."
              rows="2"
              disabled={loading}
            />

            <button
              onClick={askAI}
              disabled={!question.trim() || loading}
            >
              {loading ? "Thinking..." : "Ask AI →"}
            </button>

          </div>

          {/* Bottom Hint */}
          <div className="input-hint">

            <span>
              Press Enter to ask · Shift + Enter for a new line
            </span>

            {(history.length > 0 || error) && (
              <button
                className="clear-button"
                onClick={clearConversation}
              >
                Clear
              </button>
            )}

          </div>

        </div>

      </section>
    </main>
  );
}

export default Talk;