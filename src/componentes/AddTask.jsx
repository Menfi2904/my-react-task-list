import { useState } from "react";

export default function AddTask({ addNewTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleOnChange = (e) => {
    setTaskInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      addNewTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <form id="form" name="form" onSubmit={handleSubmit}>
        <input
          id="nombre"
          className="formStyle"
          type="text"
          value={taskInput}
          placeholder="Agregar Nueva Tarea..."
          onChange={handleOnChange}
        ></input>
        <button onClick={handleSubmit}>Agregar Tarea</button>
      </form>
    </div>
  );
}
