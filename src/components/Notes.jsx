import React from "react";
import NoteContent from "./NoteContent";
import Home from "./Home";

const Notes = ({
  selectedNote,
  isPhone,
  display,
  setDisplay,
  noteActive
}) => {
  return (
    <>
      {selectedNote && selectedNote.notes ? (
        <NoteContent
          id={selectedNote.id}
          name={selectedNote.name}
          color={selectedNote.color}
          notes={selectedNote.notes}
          isPhone={isPhone}
          display={display}
          setDisplay={setDisplay}
        />
      ) : (
        <Home noteActive={noteActive}  isPhone={isPhone} />
      )}
    </>
  );
};

export default Notes;
