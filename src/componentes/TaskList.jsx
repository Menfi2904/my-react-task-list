import Task from "./Task";
import AddTask from "./AddTask";
import useFunctions  from "../hooks/useFunctions";

function TaskList() {
const {tareas, complete, deleteTask, addNewTask, editTask} = useFunctions()

  return (
    <div>
      <AddTask addNewTask={addNewTask} />
      {tareas.map((tarea) => (
        <Task
          key={tarea.id}
          tarea={tarea}
          complete={complete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
