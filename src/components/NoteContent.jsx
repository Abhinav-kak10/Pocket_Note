import React, { useState, useEffect } from "react";
import "../styles/NoteContent.css";
import NoteBanner from "./NoteBanner";
import NoteEditor from "./NoteEditor";

const NoteContent = ({ name, color, id, isPhone, display, setDisplay }) => {
  const [notes, setNotes] = useState([]);
  const [groupId, setGroupId] = useState("");
  const [newNote, setNewNote] = useState({});

  useEffect(() => {
    const noteGroups = JSON.parse(localStorage.getItem("noteGroups"));
    const groupIndex = noteGroups.findIndex((group) => group.id === id);
    const group = noteGroups[groupIndex];
    setGroupId(group.id);
    setNotes([...group.notes], newNote);
    console.log(group.notes);
  }, [id, newNote, setNewNote]);

  const handleNewNote = (value) => {
    setNewNote(value);
    setNotes([...notes], newNote);
  };

  return (
    <div
      className="noteContainer flex justify-start"
      style={{ display: isPhone && !display ? "none" : "" }}
    >
      <NoteBanner
        name={name}
        color={color}
        isPhone={isPhone}
        display={display}
        setDisplay={setDisplay}
      />
      {groupId === id &&
        notes &&
        notes.map((note, index) => {
          const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          };
          const timestamp = new Date().toLocaleString(undefined, options);
          return (
            <div className="NoteContent flex justify-start " key={index}>
              <div className="notesBox">
                <div className="descriptionContainer">
                  <div className="description">{note.content}</div>
                </div>
                <div className="timeStampContainer">{timestamp}</div>
              </div>
            </div>
          );
        })}
      {notes && notes.length <= 0 ? <p className="displayTxt">Start Writing Notes Here!</p> : ""}
      <NoteEditor id={id} handleNewNote={handleNewNote} />
    </div>
  );
};

export default NoteContent;
