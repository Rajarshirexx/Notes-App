import { Navigate, Route, Routes } from "react-router-dom";
import NewNote from "./Pages/NewNotes.tsx";

export type Note = {
  id: string
} & NoteData;

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
};

export type Tag = {
  id: string
  label: string
};

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/new" element={<NewNote /> } />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
