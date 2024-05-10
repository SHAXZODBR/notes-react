import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const handleDelete = (id) => {
    setThoughts(thoughts.filter((thought) => thought.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Input setThoughts={setThoughts} thoughts={thoughts} />
      <Todo thoughts={thoughts} onDelete={handleDelete} />
      <Footer thoughts={thoughts} />
    </div>
  );
};

export default App;
