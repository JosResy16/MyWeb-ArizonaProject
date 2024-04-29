
import './Nav.css';

function Nav() {
    return (
        <header>
            <nav className="navBar">
                <a className="navbar-brand">JL.Dev</a>
                <button type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse">
                    <ul className="">
                        <li className="nav-item">
                            <a >Home</a>
                        </li>
                        <li className="nav-item">
                            <a >Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a >Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;