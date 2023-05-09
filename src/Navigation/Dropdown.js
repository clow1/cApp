import React from "react";
import { Link } from 'react-router-dom';
import './Dropdown.css'

function Mens() {
    const [mOpen, setMens] = React.useState(false);
    const handleMensOpen = () => {
        setMens(!mOpen);
    };
    return (
        <div>
    <button onClick = {handleMensOpen}> Men's</button>
    { mOpen ? (
        <ul className = "menu">
            <li className = "menu-item">
                <button> <Link to ="/MensApparel"> Apparel</Link> </button>
            </li>
            <li className = "menu-item">
                <button>Sale</button>
            </li>
        </ul>
    ) : 
    null}
    
    </div>
    );
}


function Womens() {
    const [wOpen, setWomens] = React.useState(false);
    const handleWomensOpen = () => {
        setWomens(!wOpen);
    };
    return (
    <div>
    <button onClick = {handleWomensOpen}> Women's</button>
    { wOpen ? (
        <ul className = "menu">
            <li className = "menu-item">
                <button><Link to ="/WomensApparel">Apparel</Link></button>
            </li>
            <li className = "menu-item">
                <button>Sale</button>
            </li>
        </ul>
    ) : 
    null}
    
    </div>
    );
}


const Dropdown =() => {
    return [<Womens/>, <Mens/>]
  
  
}

export default Dropdown;


