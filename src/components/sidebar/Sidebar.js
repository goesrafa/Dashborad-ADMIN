import './Sidebar.css';
import logo from '../../assests/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ' '} id='sidebar'>
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt='logo' />
                    <h1>ProgramCenter</h1>
                </div>
                <i
                    onClick={() => closeSidebar()}
                    className='fa fa-times'
                    id='sidebarIcon'
                    aria-hidden='true'
                ></i>
            </div>
            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <a href='#'>Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                    <a href='#'>Area Administrativa</a>
                </div>
                <div className='sidebar__link'>
                    <a href='#'>Lojas</a>
                </div>
                <div className='sidebar__link'>
                    <a href='#'>Produtos</a>
                </div>
                <h2>PESSOAS</h2>
            <div className='sidebar__link'>
                <a href='#'>Administradores</a>
            </div>
            <div className='sidebar__link'>
                <a href='#'>Usuários</a>
            </div>
            <div className='sidebar__link'>
                <a href='#'>Pagamentos/Custos</a>
            </div>
            <div className='sidebar__link'>
                <a href='#'>Política de privacidade</a>
            </div>
            <div className='sidebar__logout'>
                <a href='#'>Log out</a>
            </div>
            </div>
               
        </div>
    )
}

export default Sidebar;