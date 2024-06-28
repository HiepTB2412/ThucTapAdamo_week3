import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    const test = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/cart',
            name: 'Cart'
        },
        {
            link: '/login',
            name: 'Login'
        }
    ];

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Router V6</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {test.map((item, index) => (
                            item.name !== 'Login' ? (
                                <Link key={index} className='nav-link' to={item.link}>{item.name}</Link>
                            ) : (
                                <NavDropdown key={index} title="Setting" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={item.link}>{item.name}</NavDropdown.Item>
                                </NavDropdown>
                            )
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
