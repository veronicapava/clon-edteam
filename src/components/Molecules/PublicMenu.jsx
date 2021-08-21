import { NavLink } from "react-router-dom";

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/login">Iniciar sesión</NavLink></li>
      <li><NavLink to="/registro">Registro</NavLink></li>
    </ul>
  )
}

export default PublicMenu;
