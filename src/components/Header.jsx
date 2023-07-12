import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Logo from '../app/images/logo-white-nobg.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar dark expand='md' className='d-flex'>
                <NavbarBrand href='/' className='col-2 ml-0'>
                    <img className='logo' src={Logo} alt='logo' />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-md-auto' navbar>
                        <NavItem>
                            <NavLink
                               className='nav-link' href='#about-me'
                            >
                                About me
                            </NavLink>
                        </NavItem>
                        <div className='d-none d-md-block nav-divider' style={{ fontSize: '40px', marginLeft: '1.5rem', marginRight: '1.5rem' }}> |</div>
                        <NavItem>
                            <NavLink className='nav-link' href='#projects'>
                                Projects
                            </NavLink>
                        </NavItem>
                        <div className='d-none d-md-block nav-divider' style={{ fontSize: '40px', marginLeft: '1.5rem', marginRight: '1.5rem' }}> |</div>
                        <NavItem>
                            <NavLink className='nav-link' href='#contact'>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;