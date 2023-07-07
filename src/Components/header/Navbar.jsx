
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.jpeg"
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <div className="container text-center">
                <Link to="/" className="navbar-brand" href="#"><img src={logo} alt="" /></Link>
                <h3 className="text-white text">MagiaLancer</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jobs">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Graduation projects</Link>
                            </li>
                        </ul>
                        <Link to="/login" classNameName="login bg-white p-2 rounded text-dark mt-4">
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




// <div classNameName="collapse navbar-collapse" id="navbarColor02">
// <ul classNameName="navbar-nav mx-auto">
//     <li classNameName="nav-item">
//         <Link classNameName="nav-link" to="/">Home
//         </Link>
//     </li>
//     <li classNameName="nav-item">
//         <Link classNameName="nav-link" to="/about">About</Link>
//     </li>
//     <li classNameName="nav-item">
//         <Link classNameName="nav-link" to="/jobs">Jobs</Link>
//     </li>
//     <li classNameName="nav-item">
//         <Link classNameName="nav-link" to="/projects">Graduation projects</Link>
//     </li>
// </ul>

// </div>