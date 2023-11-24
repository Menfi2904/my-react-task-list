import Task from "./Task";
import AddTask from "./AddTask";
import useFunctions from "../hooks/useFunctions";
import ClearAll from "./ClearAll";
import TaskPending from "./TaskPending";
import Header from "./Header";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function TaskList() {
  const {
    tareas,
    complete,
    deleteTask,
    addNewTask,
    editTask,
    clearAllTask,
    tareasIncompletas,
  } = useFunctions();

  const bg = useColorModeValue('blue.400', 'gray.800')

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={bg}
      
    >
      <Box padding="30px" borderRadius="20px" w="400px" bg={bg}>
        <Header />
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
        <ClearAll clearAllTask={clearAllTask} />
        <TaskPending tareasIncompletas={tareasIncompletas} />
      </Box>
    </Flex>
  );
}
