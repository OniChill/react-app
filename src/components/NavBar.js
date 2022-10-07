import { Navbar, Container, Nav, NavLink } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>MellanaFilm</Navbar.Brand>
                    <Nav>  
                        <NavLink>Trending</NavLink>
                        <NavLink>Superhero </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar