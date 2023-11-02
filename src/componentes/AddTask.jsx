import { useState } from "react";
import { RiAddBoxFill } from "react-icons/Ri";

export default function AddTask({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    title: undefined,
    description: undefined,
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      setError({ ...error, title: "El titulo es obligatorio" });
    } else if (title.length <= 3) {
      setError({
        ...error,
        title: "El titulo debe contener al menos 3 caracteres",
      });
    } else {
      setError({ ...error, title: "" });
      addNewTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  const handleOnChangeTitle = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
    if (newTitle.trim() === "") {
      setError({ ...error, title: "El titulo es obligatorio" });
    } else if (newTitle.length <= 3) {
      setError({
        ...error,
        title: "El titulo debe contener al menos 3 caracteres",
      });
    } else {
      setError({ ...error, title: "" });
    }
  };

  const handleOnChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleOnSubmit(event);
    }
  };

  const isValid = Object.keys(error).every(
    (key) => error[key] === "los datos son correctos"
  );

  return (
    <form className="formStyle" id="form" name="form" onSubmit={handleOnSubmit}>
      <label>Title</label>
      <input
        className="inputAgregarTareasForm"
        name="titulo"
        type="text"
        value={title}
        placeholder="Add a title for your task"
        onChange={handleOnChangeTitle}
        onKeyDown={handleEnterKey}
      ></input>
      {!isValid && <span style={{ color: "red" }}>{error.title}</span>}

      <label>Description</label>
      <input
        className="inputAgregarTareasForm"
        name="descripcion"
        type="text"
        value={description}
        placeholder="Add a description for your task"
        onChange={handleOnChangeDescription}
        onKeyDown={handleEnterKey}
      ></input>

      <RiAddBoxFill className="botonAgregar" onClick={handleOnSubmit} />
    </form>
  );
}
