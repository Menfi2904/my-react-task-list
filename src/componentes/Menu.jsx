import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/todo-app">To-Do APP</Link>
        </li>
      </ul>
    </nav>
  );
}
