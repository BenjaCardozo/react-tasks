import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { FiSave } from "react-icons/fi";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto shadow-2xl">
      <form
        onSubmit={handleSumbit}
        className="bg-[#909484] p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-black text-center mb-3">
          Crea tu tarea
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-[#CEDE9E] p-3 w-full mb-2 shadow-xl hover:my-1"
        />
        <textarea
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-[#CEDE9E] p-3 w-full mb-2 shadow-xl hover:my-0.5"
        ></textarea>
        <button className="bg-[#CEDE9E] hover:bg-[#c7d1a9] px-10 py-3 rounded-md shadow-xl hover:m-0.5">
          <FiSave />
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
