import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__rigth">
            <a href="#">
            <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
            </a>

            <a href="#">
            <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" />
            </a>

            </div>
        </nav>
    )
}
export default Navbar