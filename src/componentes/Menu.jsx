import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/"> Home 🏠</Link>

      <Link to="/about-us"> About Us 👩‍💻</Link>

      <Link to="/todo-app"> To-Do APP 📚✏</Link>
    </nav>
  );
}
