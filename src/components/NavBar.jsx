import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#111' : '#444',
    fontWeight: isActive ? 700 : 500
});

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#eee', padding: '0.75rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/assets/img/vr-bags.png" alt="Logo TiendaUro" width={32} height={32} style={{ borderRadius: 6 }} />
                    <h1 style={{ margin: 0 }}>
                        <NavLink to="/" style={linkStyle}>VRBAGS</NavLink>
                    </h1>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
                    <li><NavLink to="/" style={linkStyle}>Inicio</NavLink></li>
                    <li><NavLink to="/category/mochilas" style={linkStyle}>Mochilas</NavLink></li>
                    <li><NavLink to="/category/carteras" style={linkStyle}>Carteras</NavLink></li>
                    <li><NavLink to="/category/riñoneras" style={linkStyle}>Riñoneras</NavLink></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
