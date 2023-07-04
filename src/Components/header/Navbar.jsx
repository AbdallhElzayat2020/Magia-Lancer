import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.jpeg"
const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-primary fixed-top">
            <div class="container text-center">
                <Link to="/" class="navbar-brand" href="#"><img src={logo} alt="" /></Link>
                <h3 className="text-white text">MagiaLancer</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/jobs">Jobs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projects">Graduation projects</Link>
                            </li>
                        </ul>
                        <Link to="/login" className="login bg-white p-2 rounded text-dark mt-4">
                            Login
                            <i className="fa-regular fa-user fa-lg ms-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;




// <div className="collapse navbar-collapse" id="navbarColor02">
// <ul className="navbar-nav mx-auto">
//     <li className="nav-item">
//         <Link className="nav-link" to="/">Home
//         </Link>
//     </li>
//     <li className="nav-item">
//         <Link className="nav-link" to="/about">About</Link>
//     </li>
//     <li className="nav-item">
//         <Link className="nav-link" to="/jobs">Jobs</Link>
//     </li>
//     <li className="nav-item">
//         <Link className="nav-link" to="/projects">Graduation projects</Link>
//     </li>
// </ul>

// </div>