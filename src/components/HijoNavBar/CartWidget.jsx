import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidad} = useContext(CartContext)

    // const ContenedorComprando = document.querySelector(.contenedorComprando)

    return (
        <div className='contenedorCarrito'>
            <button className='buttonCarrito'>
                <span className='material-symbols-outlined'>shopping_cart</span>
                <p className='numeroCarrito'>{cantidad}</p>
            </button>
        </div>
    )
}

export default CartWidget