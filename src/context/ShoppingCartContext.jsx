// import {useState, createContext} from 'react'

// export const CartContext = createContext(null)

// const ShoppingCartProvider = ({children}) => {

//     const [cart, setCart] = useState([])

//     const comision = "React en Coderhouse"

//     /*  Agregar elementos al carrito
//         Eliminar
//         , etc. */

//     /*  increment
//         decrement
//         reset */

//     return (
//         <CartContext.Provider value={{cart, setCart, comision}}>
            
//             {children}

//         </CartContext.Provider>
//     )
// }

// export default ShoppingCartProvider

import React from 'react'

const ShoppingCartContext = () => {
  return (
    <div>ShoppingCartContext</div>
  )
}

export default ShoppingCartContext