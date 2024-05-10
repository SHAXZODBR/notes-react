import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setThoughts, thoughts }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    setThoughts([...thoughts, { text, id: uuidv4() }]);
    setText("");
  };

  return (
    <div className="flex justify-center">
      <input
        maxlength="500"
        className=" p-2 pl-4 pr-12 m-4 bg-slate-800 text-slate-200 rounded-3xl  sm:w-[80%] md:w-[50%] lg:w-[40%]"
        placeholder="Enter your thoughts..."
        name="add"
        value={text || ""}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick} className="relative -left-14 w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Input;
