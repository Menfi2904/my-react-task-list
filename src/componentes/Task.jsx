import { Box, Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/Ri";


function Task({ tarea, complete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(tarea.title);
  const [editedDescription, setEditedDescription] = useState(tarea.description);

  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? "line-through" : "none",
    };
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(tarea.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <Flex style={getStyle()} 
      bg="blue.500"
      padding="10px"
      marginBottom="10px"
      borderRadius="15px"
      align="center"
    >
      {isEditing ? (
        <Box>
          <Input
            size="md"
            variant="flushed"
            id="inputTitle"
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
          <Input
            size="sm"
            variant="flushed"
            id="inputDescription"
            type="text"
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
            />
          <Button 
          onClick={handleSave} 
          h="25px"
          bg="green"
          >
            Save
          </Button>
        </Box>
      ) : (
        <Flex>
            <Flex 
              align="center"
            >
            <Checkbox
              id="nombre"
              colorScheme="green"
              size="md"
              marginRight="10px"
              isChecked={tarea.completed}
              onChange={() => complete(tarea.id)}
              />
            <Box
            display="flex"
            flexDirection="column"
            >
            <Box> {tarea.title}</Box>
            <Box>{tarea.description}</Box>
            </Box>
            <Box 
            display="flex"
            flexDirection="row"
            >
            <FaEdit className="lapiz"alt="editar" onClick={handleEdit} />
            <RiDeleteBin6Line
              className="papelera"
              alt="borrar"
              onClick={() => deleteTask(tarea.id)}
            />
            </Box>
            </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Task;
