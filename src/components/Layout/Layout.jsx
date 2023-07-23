import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/movies">MOVIE</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
