import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();


export default function useFunctions() {
  const [tareas, setTareas] = useState([]);
  const token = localStorage.getItem('token')
 useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": token
        },
      })
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => console.error(error));
    }
  }, [token]);

  const complete = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completed: !tarea.completed };
        }
        return tarea;
      })
    );
  };

  const tareasIncompletas = () => {
    return tareas.filter((tarea) => !tarea.completed).length;
  };

  const deleteTask = (id) => {
    setTareas([...tareas].filter((tarea) => tarea.id !== id));
  };

  const clearAllTask = () => {
    setTareas([]);
  };

  const addNewTask = (newTitle, newDescription) => {
    let newItem = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    setTareas([...tareas, newItem]);
  };

  const editTask = (id, newTitle, newDescription) => {
    setTareas((tareaAnterior) =>
      tareaAnterior.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, title: newTitle, description: newDescription };
        }
        return tarea;
      })
    );
  };


  return {
    tareas,
    complete,
    deleteTask,
    addNewTask,
    editTask,
    clearAllTask,
    tareasIncompletas,
  };
}
