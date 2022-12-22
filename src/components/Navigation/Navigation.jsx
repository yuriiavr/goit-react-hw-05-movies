import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={navData => (navData.isActive ? css.active_link : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={navData => (navData.isActive ? css.active_link : css.link)}
        >
          Movies
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;