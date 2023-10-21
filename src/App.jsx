import Header from "./componentes/Header";
import TaskList from "./componentes/TaskList";
import './app.css'

const tasks = [
  { id: 1, descripcion: "hacer la compra", completada: false },
  { id: 2, descripcion: "caminar en las mañanas", completada: true },
  { id: 3, descripcion: "limpiar la casa", completada: true },
];

function App() {
  return (
    <div className="container">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
