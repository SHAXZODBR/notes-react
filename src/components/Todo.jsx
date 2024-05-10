import { useState } from "react";

const Todo = ({ thoughts, onDelete }) => {
  const [completed, setCompleted] = useState({});

  const handleChecked = (id) => {
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [id]: !prevCompleted[id],
    }));
  };

  return (
    <section>
      {thoughts.map((thought) => (
        <div key={thought.id} className="flex justify-center text-wrap mx-12 ">
          <ul className="p-2 m-4 bg-slate-600 text-slate-200 rounded-md max-w-[90%]">
            <li className="relative pr-8">
              <p
                className={completed[thought.id] ? "line-through flex" : "flex"}
              >
                <span className="mr-2 pt-1">
                  <input
                    checked={completed[thought.id] || false}
                    onChange={() => handleChecked(thought.id)}
                    type="checkbox"
                    name="scales"
                    className="cursor-pointer h-5 w-5 rounded-full appearance-none border-2 border-gray-300 checked:bg-slate-900 bg-white focus:outline-none"
                  />
                </span>
                <span className="overflow-hidden break-words max-w-full">
                  {thought.text}
                </span>
              </p>
              <button
                onClick={() => onDelete(thought.id)}
                className="absolute w-6 right-1 top-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="darkred"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Todo;