import { Link } from "react-router-dom";
import { useState } from "react";

// import logo from '../staticos/home.svg';
// import logo from '../staticos/decoracion1.png';
import silla from '../staticos/decoracion_silla.png';
import fondoHeader from '../staticos/decoracion1.0.1.png';

function Header() {

  const [stado, setStado] = useState({
    menu: 'animano estano',
  })

  function cambio() {
    console.log("siiiiii")

    // const valor = '';

    // stado.menu === 'animasi'? valor = 'animano' : valor = 'animasi'
    
    if( stado.menu === 'animasi estansi' ){
      setStado({
        ...stado,
        menu: 'animano estansi'
      })
      setTimeout(() => {
        setStado({
          ...stado,
          menu: 'animano estano'
        })
      }, 500);
    } else {
      setStado({
        ...stado,
        menu: 'animano estansi'
      })
      setTimeout(() => {
        setStado({
          ...stado,
          menu: 'animasi estansi'
        })
      }, 1);
    }

    

    
  }


  return (
    <>
      <header>

        <Link className="logo" to="/home">

         
        </Link>

        <div className="botonNav" onClick={cambio} ></div>

        <nav className={ stado.menu }>
          <li className="home">
            <Link to="/home">
              <div></div>
            </Link>
          </li>
          
          <li className="linkA">
            <Link to="/lugares">
              LUGARES
            </Link>
          </li>

          <li className="linkA">
            <Link to="/huecas">
              HUECAS
            </Link>
          </li>

          <li className="linkA">
            <Link to="/museos">
              MUSEOS
            </Link>
          </li>
          
          <li className="linkA">
            <Link to="/historia">
              HISTORIA
            </Link>
          </li>

          <li className="linkA">
            <Link to="/redes">
              REDES
            </Link>
          </li>
        </nav>
      </header>
    </>
  );
}

export default Header;
