import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MenuNav = () => {
  const ColorChange = ({ isActive }) => (isActive ? "Active" : undefined);

  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "grey" }}
    >
      <Navbar.Brand>
        <img width="50" src="src/assets/img/IconPoke.png" alt="Icono" />
      </Navbar.Brand>
      <div>
        <NavLink className= {ColorChange} to="/" >
          Home
        </NavLink>
           |
        <NavLink className={ColorChange} to="/pokemons">
         Pokemones
        </NavLink>
      </div>
    </Navbar>
  );
};

export default MenuNav;
