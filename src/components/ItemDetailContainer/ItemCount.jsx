import useCounter from '../useCounter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({p}) => {

    const {count, increment, decrement, reset} = useCounter(0, 1, 10)
    const {cart, cantidad, setCantidad} = useContext(CartContext)
    
    // const notify = (count) => toast(
    //         `Agregaste ${count} item al carro!`
    //     );
    
    const notify = (count, titulo) => {
        if (count === 1) {
            toast(
                    `Has agregado un ${titulo} al carro!`
                );
        } else {
            toast(
                    `Has agregado ${count} ${titulo} al carro!`
                );
        }
    }

        /* "id": 1,
        "title": "Teclado Gamer",
        "price": 89.99,
        "description": "Cuenta con interruptores mecánicos de respuesta táctil, retroiluminación RGB, anti-ghosting, teclas programables y diseño ergonómico, es tu herramienta esencial para una experiencia de juego excepcional. ¡Mejora tu rendimiento y estilo con este teclado de alta gama!",
        "category": "Perifericos",
        "img": "https://www.arraysrl.com/Temp/App_WebSite/App_PictureFiles/ItemImages/463_800.jpg",
        "icon": "keyboard",
        "cantidad" : 0 */

    const onAdd = () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === p.id)
        // repeat ? cart.find((prod) => {
        //     if (prod.id === p.id) {
        //         prod.quantity += count
        //         console.log(cantidad)
        //         setCantidad(cantidad + count)
        //     }
        // }) : cart.push({
        //     id: p.id,
        //     img: p.img,
        //     title: p.title,
        //     price: p.price,
        //     quantity: count
        // })
        if (repeat) {
            cart.find((prod) => {
                if (prod.id === p.id) {
                    prod.quantity += count
                    setCantidad(cantidad + count)
                }
            })
        } else {
            cart.push({
                id: p.id,
                img: p.img,
                title: p.title,
                price: p.price,
                quantity: count
            })
            setCantidad(cantidad + count)
        }
        let titulo = p.title
        notify(count, titulo)
        reset()
        /* console.log(cart) */
    }

    // import React from 'react';

    // import { ToastContainer, toast } from 'react-toastify';
    // import 'react-toastify/dist/ReactToastify.css';
    
    // function App(){
    //     const notify = () => toast("Wow so easy!");

    //     return (
    //     <div>
    //         <button onClick={notify}>Notify!</button>
    //         <ToastContainer />
    //     </div>
    //     );
    // }

    return (
        <>
            <div className='control-items-details'>
                <button onClick={decrement}>-</button>
                <button className='central-button-details' onClick={onAdd}>Agregar</button>
                {/* <button onClick={() => setContador(0)} className='central-button'>Agregar</button> */}
                <button onClick={increment}>+</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <p className='contadorSuma-details'>{count}</p>
        </>
    )
}

export default ItemCount