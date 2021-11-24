import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import './cartWidget.scss'

export const CartWidget = () => {

    return (
        <div>
            <FaCartPlus className="cartWidget"/>
        </div>
    )
}