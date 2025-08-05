import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#eee', padding: '1rem' }}>
            <h1>TiendaUro</h1>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
