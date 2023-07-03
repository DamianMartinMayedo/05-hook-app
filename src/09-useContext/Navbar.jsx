import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    // Link funciona como la etiqueta "a" tradicional pero no se recarga la pagina completamente
    // NavLink permite controlar para indicar si un elemento del nav está activo o no
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark rounded-3 mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>UseContext</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
