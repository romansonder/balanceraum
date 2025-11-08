import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info">
                        <a href="tel:0435406569">043 540 65 69</a>
                        <a href="mailto:info@therapiepunkt-suenikon.ch">info@therapiepunkt-suenikon.ch</a>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo">
                            <h2>BalanceRaum</h2>
                        </Link>

                        <nav className="nav">
                            <Link to="/">Home</Link>
                            <Link to="/about">Über uns</Link>
                            <Link to="/services">Angebot</Link>
                            <Link to="/location">Lageplan</Link>
                            <Link to="/contact">Kontakt</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;