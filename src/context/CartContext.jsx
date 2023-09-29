import {useState, createContext} from 'react'

export const CartContext = createContext(null)

const ShoppingCartProvider = ({children}) => {

    
    const [cart, setCart] = useState([])
    
    const [cantidad, setCantidad] = useState(0)

    /* const cantidadSumada = () => { cart.reduce((total, producto) => {
                                return cantidad = total + producto.quantity
                            }, 0)
                        } */

    const comision = "React en Coderhouse"

    /*  Agregar elementos al carrito
        Eliminar
        , etc. */

    /*  increment
        decrement
        reset */

    // Contador Contador Contador Contador Contador
    const useCounter = (initial = 0, min = 1, max = 10) => {
        if(initial < min || initial > max) initial = min

        const [count, setCount] = useState(initial)

        const decrement = () => {
            if(count > min) setCount (prev => prev -1)
        }

        const increment = () => {
            if(count < max) setCount (prev => prev +1)
        }

        const reset = () => {
            setCount(initial)
        }

        return {count, decrement, increment, reset}
    }
    // Contador Contador Contador Contador Contador

    const clear = () => { 
        setCart([])
        setCantidad(0)
    }

    return (
        <CartContext.Provider value={{cart, setCart, comision,
        useCounter, clear, cantidad, setCantidad}}>
            
            {children}
            
        </CartContext.Provider>
    )
}

// addItem(item, quantity) => { // agregar cierta cantidad de un ítem al carrito
//  
//      
//      
// removeltem(itemld) => {
// let newcart = cart.filter((item.id) => item.id != itemId)
// setCart(newcart)
// }    Remover un item del cart por usando su id
//
// clear() => { setCart([]) } // Remover todos los items
//
// isInCart(id) =› { truelfalse
// cart.some((element) => element.id === id))
// }
export default ShoppingCartProvider