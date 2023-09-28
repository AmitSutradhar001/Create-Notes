import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note.jsx";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [note, setNote] = useState([]);

  function addNote(newnote) {
    setNote((preNote) => {
      return [...preNote, newnote];
    });
  }

  function Delete(n) {
    setNote((prev) => {
      return prev.filter((item, index) => {
        return index !== n;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={Delete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
