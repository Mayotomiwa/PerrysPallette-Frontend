import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import '../styles/Home.css';

export default function NavBarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className='nav' id='nav'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" id='nav-items'>
                        <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>About</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>Menu</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>Reservation</Nav.Link>
                        <Nav.Link href="#link" className='me-5'>Contact</Nav.Link>
                    </Nav>
                    <Nav className='me-auto'>
                        <Stack direction='horizontal' gap={3}>
                            <Nav.Link href="#home"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                            <Nav.Link href="#home"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                            <Nav.Link href="#home"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                            <Nav.Link href="#home"><FontAwesomeIcon icon={faPinterest} /></Nav.Link>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
