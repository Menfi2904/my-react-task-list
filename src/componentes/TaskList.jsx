import Task from "./Task";


export default function TaskList ({ tasks })  {
  return (
    <>
      {tasks.map((tarea, id) => (
        <Task key={id} task={tarea} />
      ))}
    </>
  );
}
