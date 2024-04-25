export const NavBar = () => (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <a href="*">
                    <img src={logo} alt="Logo Mi Meli" height={40} />
                </a>
                <Navbar.Brand href="/">MI MELI</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/category/granel" as={NavLink}>
                        GRANEL
                    </Nav.Link>
                    <Nav.Link to="/category/envasado" as={NavLink}>
                        ENVASADO
                    </Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
);