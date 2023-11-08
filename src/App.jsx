import TaskList from "./componentes/TaskList";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Menu from "./componentes/Menu";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="containerAll">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/todo-app" element={<TaskList />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
