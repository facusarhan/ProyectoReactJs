import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './itemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const initialCant = initial || 1;
    const [cant, setCant] = useState(initialCant);

    const handleCantDown = ()=> {
        if (cant > 0) {
            setCant(cant -1)
        }
    }
    const handleCantUp = ()=> {
        if (cant < stock) {
            setCant(cant +1)
        }
    }

    return(
        <div>
            <Button 
            type= "button"
            disable={cant ===0}
            onClick={handleCantDown}
            className="btn-"
            variant= "denger"> - </Button >
            <br/>
            <span>{cant}</span>
            <Button
            type= "button"
            onClick= {handleCantUp}
            disabled= {cant ===5}
            variant= "denger"
            className="btn+"> + </Button >
            <br/>
            <Button 
            type= "button"
            onClick={()=> onAdd(cant)}
            variant="danger"
            className="add-btn"> Agregar al carrito </Button >
        </div>
    )
}

export { ItemCount }