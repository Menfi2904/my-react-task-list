import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Menu from "./componentes/Menu";
import { Box, useColorModeValue } from "@chakra-ui/react";
import ToggleColorMode from "./componentes/ToggleColorMode";

const Login = lazy(() => import("./pages/Login"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const TaskList = lazy(() => import("./componentes/TaskList"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  const bg = useColorModeValue('blue.400', 'gray.800')
  
  return (
    <Suspense fallback={<h2>Cargando...</h2>}>
      <Box bg={bg}>
      <ToggleColorMode />
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Login />} />
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
