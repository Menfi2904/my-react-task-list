import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Menu from "./componentes/Menu";
import { Box } from "@chakra-ui/react";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const TaskList = lazy(() => import("./componentes/TaskList"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Suspense fallback={<h2>Cargando...</h2>}>
      <Box bg="blue.400">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/todo-app" element={<TaskList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Suspense>
  );
}

export default App;
