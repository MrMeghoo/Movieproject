import { Navbar, Container, Nav } from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MOVIETIME</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Trending</Nav.Link>
                    <Nav.Link href="#pricing">Join Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
