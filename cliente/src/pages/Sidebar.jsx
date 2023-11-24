import { Link } from 'react-router-dom';

// Importa los iconos necesarios aquí

const Sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className='logoDiv flex'>
                {/*<img src={logo} alt="Image Name" />*/}
                <h2>MIALQUI.</h2>
            </div>

            <div className='menuDiv'>
                <h3 className='divTitle'>
                    Todo en una sola plataforma
                </h3>
                <ul className='menuLists grid'>
                    {createMenuItem('Explorar', '/explore')}
                    {createMenuItem('Ley de Alquileres', '/rent-law')}
                    {createMenuItem('¿Quiénes somos?', '/about')}
                    {createMenuItem('Contáctanos', '/contact')}
                </ul>
            </div>

            <div className='menuDiv'>
                <h3 className='divTitle'>
                    Servicios
                </h3>
                <ul className='menuLists grid'>
                    {createMenuItem('Ayuda', '/help')}
                    {createMenuItem('Políticas y Términos de Uso', '/terms')}
                </ul>
            </div>

            <div className='sideBarCard'>
                {/*<BsQuestionCircle className='icon' />*/}
                <div className='cardContent'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>

                    <h3>Centro de Ayuda</h3>
                    <p>Si tienes preguntas o problemas con MIALQUI, contáctanos. Estamos aquí para ayudarte.</p>

                    <button onClick={() => {}} className='btn'> Ir al centro de ayuda</button>
                </div>
            </div>
        </div>
    );
};

// Función auxiliar para crear elementos de menú
const createMenuItem = (text, to) => (
    <li className='listItem' key={text}>
        <Link to={to}>
            <button className='menuLink flex'>
                {/* Icono correspondiente aquí */}
                <span className='smallText'>{text}</span>
            </button>
        </Link>
    </li>
);

export default Sidebar;

