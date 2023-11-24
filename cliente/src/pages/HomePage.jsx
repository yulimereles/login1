import { InactiveUser } from "../components/InactiveUser"

export const HomePage = () => {
  return (
    <>
    <InactiveUser />
    <div className="listadoSection">
        <div className="heading flex">
        <h1>Listado de Paginas</h1>
        <button className="btn flex">
            Ver todo {/*Agregar icon */}
        </button>
        </div>
        <ul className="listContainer">
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>
            <li className="secContainer flex">
                <div className="singleItem">
               {/* <AiFillHeart className='icon' />
             <img src={img} alt="Nombre de la Imagen" /> */}
            <h3>Departamento</h3>
                </div>
            </li>

        </ul>
    </div>
    </>
  )
}