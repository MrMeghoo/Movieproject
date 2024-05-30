import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MOVIETIME</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Trending</Nav.Link>
                    <Nav.Link href="https://buy.stripe.com/test_aEUg1F1dk9Lw2yI9AA">Join Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
