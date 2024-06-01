import React, { useState, useEffect } from 'react';

function StickyNotes() {
  const [note, setNote] = useState("");
  const [rememberedNotes, setRememberedNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("rememberedNotes"));
    if (savedNotes !== null) {
      setRememberedNotes(savedNotes);
    }
  }, []);

  const handleRememberNote = () => {
    if (note.trim() === "") {
      return;
    }
    const newRememberedNotes = [...rememberedNotes, note];
    localStorage.setItem("rememberedNotes", JSON.stringify(newRememberedNotes));
    setRememberedNotes(newRememberedNotes);
    setNote("");
  };

  const handleClearNotes = () => {
    localStorage.removeItem("rememberedNotes");
    setRememberedNotes([]);
  };

  return (
    <div className="Remember-note-button-div">
      <h2>Sticky Notes</h2>
      <p>What would you like me to remember?</p>
      <div className="input-button-container">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{ height: "2em", verticalAlign: "middle" }}
        />
        <button className='button-margin' onClick={handleRememberNote}>Remember</button>
        {rememberedNotes.length > 0 && (
          <button className='button-margin' onClick={handleClearNotes}>Clear all</button>
        )}
      </div>
      {note && (
        <p>
          You want me to remember: <strong>{note}</strong>
        </p>
      )}
      {rememberedNotes.length > 0 && (
        <div>
          <p>Previously remembered notes:</p>
          <ul>
            {rememberedNotes.map((previousNote, index) => (
              <li key={index}>{previousNote}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StickyNotes;
