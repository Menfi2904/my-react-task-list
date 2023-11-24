import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    setUser(form);
    auth();
  }

  function auth() {
    fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("Error de inicio de sesión:", error);
      });
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="60vh"
    >
      <Heading fontSize="4xl" as="b">
        TO-DO APP
      </Heading>
      <form className="form" id="form" name="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          variant="filled"
          mt="20px"
          focusBorderColor="lime"
        ></Input>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          variant="filled"
          mt="20px"
          focusBorderColor="lime"
        ></Input>
        <Button
          type="submit"
          mt="20px"
          colorScheme="green"
          size="md"
          height="40px"
          width="100px"
          border="2px"
          borderColor="green.800"
        >
          Login
        </Button>
      </form>
    </Flex>
  );
}
