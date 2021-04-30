import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddFolderButton from "./AddFolderButton"

export default function NavbarComponent() {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand as={Link} to="/">
                AACapp
            </Navbar.Brand>

            <Nav>
                <Nav.Link as={Link} to="/" onClick={refreshPage} className="site-button refresh-button">
                    Refresh
                </Nav.Link>
            </Nav>

            <AddFolderButton />

            <Nav>
                <Nav.Link as={Link} to="/user" className="site-button profile-button">
                    Profile
                </Nav.Link>
            </Nav>
            
        </Navbar>
    )
}
