import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";

export default function NoteForm() {
  return (
    <form className="space-y-4 my-4 flex flex-col gap-4">
      <div className="flex gap-4">
        {/* Title Input */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium text-gray-700 my-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            required
            className="border rounded-md p-2 w-80 border border-gray-300 outline-none"
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
            className="w-80 h-12"
            classNamePrefix="react-select"
            placeholder="Select or create tags..."
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.375rem",
                padding: "2px",
                borderColor: "#d1d5db",
                boxShadow: "none",
                "&:hover": { borderColor: "#a1a1aa" },
              }),
            }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="Body" className="font-medium text-gray-700 my-2">
          Body
        </label>
        <textarea
          id="body"
          required
          className="border rounded-md p-2 w-full h-92 border border-gray-300 outline-none"
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
