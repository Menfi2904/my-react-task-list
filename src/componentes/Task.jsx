export default function Task ({ task }) {
  const getStyle = () =>{
    return {
      textDecoration: task.completada ? "line-through" : "none"
    }
  } 

  return (
    <div style={getStyle()} className="inputstyle">
      <input type="checkbox" checked={task.completada}/>
      {task.descripcion}
      </div>
  );
}
