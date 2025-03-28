import { FormEvent, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { NoteData, Tag } from "../App"; // Import `Tag` for correct typing

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [tags, setTags] = useState<Tag[]>([]); // Ensure it matches `Tag[]`

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title,
      markdown,
      tags, // Now correctly formatted
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border bg-white flex flex-col gap-4 p-4 shadow-md border-gray-300 rounded-xl"
    >
      <div className="flex gap-4">
        {/* Title Input */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium text-gray-700 my-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            required
            className="rounded-md p-2 w-80 border border-gray-300 outline-none"
            placeholder="Enter a title..."
          />
        </div>

        {/* Tags Select Input */}
        <div className="flex flex-col">
          <label htmlFor="tags" className="font-medium text-gray-700 my-2">
            Tags
          </label>
          <CreatableSelect
            isMulti
            className="w-80"
            classNamePrefix="react-select"
            placeholder="Select or create tags..."
            value={tags.map(tag => ({ label: tag.label, value: tag.id }))} // Ensure correct format
            onChange={(selectedOptions) =>
              setTags(
                selectedOptions
                  ? selectedOptions.map(option => ({ id: option.value, label: option.label }))
                  : []
              )
            }
            onCreateOption={(inputValue) => {
              const newTag = { id: crypto.randomUUID(), label: inputValue };
              setTags((prevTags) => [...prevTags, newTag]);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="Body" className="font-medium text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          required
          className="rounded-md p-2 w-full h-92 border border-gray-300 outline-none"
          placeholder="Enter your notes here."
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="submit"
          className="border rounded-md py-2 px-4 text-white bg-blue-700 cursor-pointer hover:bg-blue-800"
        >
          Save
        </button>

        <Link to="..">
          <button
            type="button"
            className="border rounded-md py-2 px-4 border-gray-300 cursor-pointer hover:bg-gray-100"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
