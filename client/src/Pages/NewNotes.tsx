import { useState } from "react";
import NoteForm from "../Components/NoteForm.tsx";
import { NoteData } from "../App.tsx";

export default function NewNote() {

  const [notes, setNotes] = useState<NoteData[]>([]);

  function handleCreateNotes(note: NoteData) {
      setNotes((prevNotes) => [...prevNotes, note]);
      console.log("New Note Created: ", note);
  }

  return (
    <div className="p-8 flex h-screen flex-col  justify-center items-center bg-gray-200">
      <p className="text-3xl font-bold mb-6 font-serif">NEW NOTE</p>
      <NoteForm onSubmit={handleCreateNotes} />
    </div>
  );
}
