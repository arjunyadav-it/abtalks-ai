import { useState } from "react";
import {
  Search,
  Heart,
  Play,
  Clock3,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const conversations = [
  {
    id: 1,
    guest: "Mo Gawdat",
    title: "Happiness, AI & The Future of Humanity",
    category: "Mind",
    duration: "48 min",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    guest: "Robert Greene",
    title: "Power, Discipline & Understanding Yourself",
    category: "Success",
    duration: "56 min",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    guest: "Nour Arida",
    title: "Identity, Pressure & Finding Your Voice",
    category: "Life",
    duration: "42 min",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    guest: "Lewis Howes",
    title: "Relationships, Purpose & Personal Growth",
    category: "Relationships",
    duration: "51 min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    guest: "Jay Shetty",
    title: "Success Without Losing Yourself",
    category: "Success",
    duration: "44 min",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    guest: "Dr. Gabor Maté",
    title: "Healing, Stress & The Human Experience",
    category: "Mind",
    duration: "59 min",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=85"
  }
];

const categories = [
  "All",
  "Mind",
  "Success",
  "Life",
  "Relationships"
];

function Explore() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [saved, setSaved] = useState([]);

  function toggleSave(id) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  const filteredConversations = conversations.filter((talk) => {

    const matchesSearch =
      talk.title.toLowerCase().includes(search.toLowerCase()) ||
      talk.guest.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || talk.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="explore-page">

      {/* HEADER */}

      <section className="explore-header">

        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back home
        </Link>

        <p className="eyebrow">
          THE CONVERSATION LIBRARY
        </p>

        <h1>
          Explore
          <br />
          <i>conversations.</i>
        </h1>

        <p className="explore-description">
          Find the stories, ideas and people that make
          you stop, think and look at things differently.
        </p>

      </section>


      {/* SEARCH */}

      <section className="explore-controls">

        <div className="search-box">

          <Search size={19} />

          <input
            type="text"
            placeholder="Search guests, topics or conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        <div className="categories">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "category active"
                  : "category"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

      </section>


      {/* RESULTS */}

      <section className="conversation-section">

        <div className="results-header">

          <p>
            {filteredConversations.length} conversations
          </p>

          {saved.length > 0 && (
            <p>
              {saved.length} saved
            </p>
          )}

        </div>


        <div className="conversation-grid">

          {filteredConversations.map((talk) => (

            <article
              className="conversation-card"
              key={talk.id}
            >

              <div className="card-image">

                <img
                  src={talk.image}
                  alt={talk.guest}
                />

                <div className="image-overlay"></div>

                <button
                  className={
                    saved.includes(talk.id)
                      ? "save-btn saved"
                      : "save-btn"
                  }
                  onClick={() => toggleSave(talk.id)}
                >
                  <Heart
                    size={17}
                    fill={
                      saved.includes(talk.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>

                <button className="card-play">
                  <Play size={18} fill="currentColor" />
                </button>

                <span className="duration">
                  <Clock3 size={13} />
                  {talk.duration}
                </span>

              </div>


              <div className="card-content">

                <p className="card-category">
                  {talk.category}
                </p>

                <h2>
                  {talk.title}
                </h2>

                <p className="guest">
                  With <strong>{talk.guest}</strong>
                </p>

                <Link
                  to={`/talk/${talk.id}`}
                  className="card-link"
                >
                  Enter conversation →
                </Link>

              </div>

            </article>

          ))}

        </div>


        {filteredConversations.length === 0 && (

  <div className="empty-state">

    <Search size={30} />

    <h2>
      No conversations found
    </h2>

    <p>
      Try another guest, topic or category.
    </p>

    <button
      className="primary-btn"
      onClick={() => {
        setSearch("");
        setCategory("All");
      }}
      style={{ marginTop: "25px" }}
    >
      Clear filters
    </button>

  </div>

)}

      </section>

    </div>
  );
}

export default Explore;