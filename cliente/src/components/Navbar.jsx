import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider"; // Ajusta la ruta de acuerdo a tu estructura

 export const Navbar = () => {
    const { logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='topSection'>
                <div className="headerSection flex">
                    <div className="title">
                        <h1>Bienvenido a miAlqui</h1>
                        <p>¡Queremos que tu experiencia en miAlqui sea única!</p>
                    </div>

                    <div className='searchBar flex'>
                        <input type="text" placeholder='Search Dashboard' />
                        {/* <BiSearchAlt className='icon' /> */}
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" href="#">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/chat" className="nav-link" href="#">Chat</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                onClick={() => {
                                    logout();
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                }}
                                className="nav-link" href="#">Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='cardSection flex'>
                    {/* Contenido actual del Navbar */}
                    <div className='rightCard flex'>
                        <h1>Alquilar y vender</h1>
                        <p>Poder vender y alquilar ahora es más fácil con miAlqui</p>

                        <div className='buttons flex'>
                            <button className='btn'>Explora más</button>
                            <button className='btn transparent'>Lo más visto</button>
                        </div>

                        <div className="videoDiv">
                            {/* <video src={video} autoPlay loop muted></video> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


