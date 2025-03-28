import NoteForm from "../Components/NoteForm";

export default function NewNote() {
  return (
    <div className="p-10 flex flex-col  justify-center items-center">
      <p className="text-3xl font-bold mb-4">New Note</p>
      <NoteForm />
    </div>
  );
}
