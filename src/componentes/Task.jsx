export default function Task ({ task }) {
  return (
    <div className="inputstyle">
      <input type="checkbox" checked={task.completada}/>
      <span className={task.completada ? "completada" : ""} > {task.id} {task.descripcion} 
      </span>
      </div>
  );
}
