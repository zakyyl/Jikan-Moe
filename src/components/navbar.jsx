import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";


function MyNavbar() {
    return (
        <Navbar color="dark" dark expand="md">
            <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand font-weight-bold" to="/">
                Jikan Moe 
        </Link>
        <Nav className="ml-auto" navbar>
            <Link className="nav-link" to="/">
                Home
        </Link>
            <Link className="nav-link" to="/list">
            Anime List
        </Link>
        </Nav>
    </div>
    </Navbar>
    );
}

export default MyNavbar;
