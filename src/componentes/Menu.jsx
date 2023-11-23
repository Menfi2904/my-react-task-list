import { UnorderedList, ListItem } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu" >
      <UnorderedList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/about-us">About Us</Link>
        </ListItem>
        <ListItem>
          <Link to="/todo-app">To-Do APP</Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
}
