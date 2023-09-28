import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNotes((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(notes);
    event.preventDefault();
    setNotes({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={notes.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={notes.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />

        <button color="success" aria-label="edit" onClick={submitNote}>
          add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
