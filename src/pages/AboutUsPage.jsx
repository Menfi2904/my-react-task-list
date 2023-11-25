import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function AboutUsPage() {
  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    h="80vh"
    >
      <Box boxSize="400px">
        <Heading fontSize="4xl" as="b" >
          TO-DO APP
        </Heading>
        <Text mt="20px" fontSize="15px" textAlign="center">  
        ───────────────────────────────
        Desarrollada por Menfi Garcia 👩‍💻                                                                               
        ───────────────────────────────
        </Text>
        <Text mt="20px" textAlign="justify">
          Aplicación de lista de tareas, desarrollada en React, ha sido
          diseñada con una interfaz mejorada gracias a los estilos proporcionados 
          por Chakra UI. La aplicación se integra con una API para conectarse 
          a una base de datos alojada en MongoDB Atlas, donde se almacenan todas 
          las tareas y los usuarios registrados. Además, cuenta con un sistema de 
          autenticación de usuarios mediante JSON Web Token (JWT). 
          Con la aplicacion podras agregar, borrar, editar y completar tus tareas.
        </Text>
      </Box>
    </Flex>
  );
}


