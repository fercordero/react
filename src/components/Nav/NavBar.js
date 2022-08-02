import "./navbar.css";
import CartWidget from '../CartWidget/CartWidget';


function NavBar(){
    return(
      <div>
        <ul className="navbar"> 
        <li>  <img width="80" height="40" src="imagenes/logo.png" alt="logo" /></li>
        <li>HOME</li> 
        <li>MUJER</li> 
        <li>HOMBRE</li> 
        <li>REBAJAS</li> 
        <li>FAQs</li> 
        <CartWidget />
      </ul>
      
      
      </div>
    );
    
    
}

export default NavBar;