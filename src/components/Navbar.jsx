import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAutenticated, logout, user } = useAuth();
  return (
    <div>
      <nav className=" bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={
          isAutenticated ? "/tasks" : "/"
        }>
          <h1 className="text-2xl font-bold ">Tasks Manager</h1>
        </Link>
        <ul className=" flex gap-x-2 ">
          {isAutenticated ? (
            <>
              <li>
                Welcon {user.username}
              </li>
              <li>
                <Link to="/add-task"
                 className="bg-indigo-500 px-4 py-1 rounded-sm">ADD Task</Link>
              </li>
              <li>
                <Link to="/" onClick={() => {logout()}}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login"
                className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
              </li>
              <li>
                <Link to="/register"
                 className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
