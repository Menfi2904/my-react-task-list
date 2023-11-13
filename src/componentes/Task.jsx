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
    <Flex
      style={getStyle()}
      padding="5px"
      marginBottom="10px"
      marginTop="10px"
      borderRadius="10px"
      alignItems="center"
      bg="#2B6CB0"
    >
      {isEditing ? (
        <Box>
          <Input
            fontWeight="bold"
            size="md"
            variant="flushed"
            id="inputTitle"
            type="text"
            value={editedTitle}
            onChange={(event) => setEditedTitle(event.target.value)}
          />
          <Input
            fontStyle="italic"
            size="sm"
            variant="flushed"
            id="inputDescription"
            type="text"
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
          />
          <Button onClick={handleSave} h="25px" bg="green">
            Save
          </Button>
        </Box>
      ) : (
        <Flex align="center" width="100%">
          <Checkbox
            id="nombre"
            colorScheme="green"
            size="md"
            marginRight="10px"
            isChecked={tarea.completed}
            onChange={() => complete(tarea.id)}
          />
          <Box flex="1">
            <Box fontWeight="bold" > {tarea.title}</Box>
            <Box fontStyle="italic" >{tarea.description}</Box>
          </Box>
          <Flex>
            <div>
              <FaEdit className="lapiz" alt="editar" onClick={handleEdit} />
              <RiDeleteBin6Line
                className="papelera"
                alt="borrar"
                onClick={() => deleteTask(tarea.id)}
              />
            </div>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Task;
