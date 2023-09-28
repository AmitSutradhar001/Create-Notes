import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Fab from "@mui/material/Fab";/
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    // const cTime = new Date().toLocaleTimeString();
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
        <Zoom in={true}>
          <button color="success" aria-label="edit" onClick={submitNote}>
            <AddCircleIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
