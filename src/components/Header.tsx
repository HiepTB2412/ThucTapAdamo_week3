import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import '../App.css';
import { useSelector } from 'react-redux';
import { CartReducerInitialState } from '../redux/reducer/cartReducer';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    const cartData = useSelector((state: { cartReducer: CartReducerInitialState }) => state.cartReducer)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand>Shopping</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/setting">Setting</Link>
                        {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Link className='nav-link' to="/cart"><CiShoppingCart className='cart-icon' />({cartData.cartItems.length})</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
