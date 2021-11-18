import { React, useState } from 'react'
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
        <div className="btns">
            <button 
            type= "button"
            disable={cant ===0}
            onClick={handleCantDown}
            className="btn-"> - </button >
            <br/>
            <span>{cant}</span>
            <button
            type= "button"
            onClick= {handleCantUp}
            disabled= {cant ===5}> + </button >
            <br/>
            <button 
            type= "button"
            onClick={()=> onAdd(cant)}
            className="add-btn"> Agregar al carrito </button >
        </div>
    )
}

export { ItemCount }