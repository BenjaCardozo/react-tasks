import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-[#909484] text-black p-4 rounded-md shadow-2xl hover:m-1">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-[#43453D] text-sm">{task.description}</p>
      <button
        className="bg-[#CEDE9E] px-2 py-1 rounded-md mt-6 hover:bg-[#c7d1a9] shadow-xl"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
