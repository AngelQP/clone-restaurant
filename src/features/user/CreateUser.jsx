import { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 w-1/2 rounded-md border border-stone-200 p-2 focus:outline-none focus:ring focus:ring-orange-500"
      />

      {username !== "" && (
        <div>
          <button className="rounded bg-orange-600 px-4 py-2 font-medium text-white">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
