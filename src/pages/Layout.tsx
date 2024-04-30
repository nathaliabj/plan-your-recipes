import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/myrecipes">my Recipes</Link>
          </li>
        </ul> */}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
