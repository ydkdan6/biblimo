import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import image2 from "./images/9334398.jpg";
import "../Utility/style/style.css";

export default function Dashboard() {
  const [inputText, setInputText] = useState("");
  const [bibleVerses, setBibleVerses] = useState([]);
  const [error, setError] = useState("");
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(
    false
  );

  useEffect(() => {
    setSpeechSynthesisSupported("speechSynthesis" in window);
  }, []);

  useEffect(() => {
    const fetchInitialBibleVerses = async () => {
      try {
        const apiKey = "YOUR_API_KEY";
        const initialVerses = await fetchBibleVerses(apiKey);
        setBibleVerses(initialVerses);
      } catch (error) {
        console.error("Error fetching Bible verses:", error);
      }
    };

    fetchInitialBibleVerses();
  }, []);

  const fetchBibleVerses = async (apiKey) => {
    const url = `https://api.esv.org/v3/passage/text/?q=${inputText}&include-footnotes=false&include-passage-references=false&include-headings=false&limit=5`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    });
    return response.data.passages;
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const fetchBibleVerse = async () => {
    try {
      const apiKey = "98895dc83d68572ba6ab04fcf042d095ef9999d3";
      const verses = await fetchBibleVerses(apiKey);
      setBibleVerses(verses);
      setCurrentVerseIndex(0);
      setError("");
    } catch (error) {
      setError("No Bible verses found for the given query.");
      setBibleVerses([]);
      console.error("Error fetching Bible verses:", error);
    }
  };

  const handleMarqueeEnd = () => {
    // Increment the current verse index and cycle back to the beginning if necessary
    setCurrentVerseIndex((prevIndex) => (prevIndex + 1) % bibleVerses.length);
  };

  const handleSpeech = () => {
    if ("speechSynthesis" in window) {
      const Utterance = new SpeechSynthesisUtterance(
        bibleVerses[currentVerseIndex]
      );
      speechSynthesis.speak(Utterance);
    }
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="user-image rounded-full">
            <img src={image2} alt="profile-img" />
          </div>
          <div className="user-name">
            <span>
              {" "}
              <b>Godwin Eneojo Daniel</b> <br /> <span>@dannyBin</span>
            </span>
          </div>
        </div>
      </header>

      <section>
        <h2>Find a Bible Verse to Uplift You</h2>
        <main className="description">
          <input
            type="text"
            placeholder="Enter a bible verse"
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={fetchBibleVerse}>Find Verse</button>
          {speechSynthesisSupported && (
            <button className="mic" onClick={handleSpeech}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height="16"
                fill="currentColor"
                class="bi bi-mic"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
              </svg>
            </button>
          )}
        </main>

        <div className="card">
          {error && <p>{error}</p>}
          {bibleVerses.length > 0 && <p>{bibleVerses[currentVerseIndex]}</p>}
        </div>
        <div className="daily" onAnimationIteration={handleMarqueeEnd}>
          <marquee>
            <span>{bibleVerses.join(" | ")}</span>
          </marquee>
        </div>
        <div className="decr">
          <ul>
            <li><Link to='' title='Coming Soon'>Join Our Christian Community</Link></li>
           
          </ul>
        </div>
      </section>
    </div>
  );
}
