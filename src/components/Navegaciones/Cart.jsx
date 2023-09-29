import { useContext } from 'react'
// import { CartContext } from '../../context/ShoppingCartContext'
import { CartContext } from '../../context/CartContext'
import FormularioCompra from './FormularioCompra'
import CartVacio from './CartVacio'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* const itemCarroEjemplo = [
  {
      "id": 1,
      "title": "Teclado Gamer",
      "price": 89.99,
      "description": "Teclado Gamer",
      "category": "Perifericos",
      "img": "{imgTeclado}",
      "icon": "mouse"
      },
  {
      "id": 2,
      "title": "Mouse Gamer",
      "price": 32.99,
      "description": "Mouse Gamer",
      "category": "Perifericos",
      "img": "{imgMouse}",
      "icon": "keyboard"
      },
  {
      "id": 3,
      "title": "PC Gamer",
      "price": 235.99,
      "description": "PC Gamer",
      "category": "PCArmada",
      "img": "{imgPC}",
      "icon": "computer"
      }
]

const products = itemCarroEjemplo.filter((p) => p.category === "Perifericos") */

const Cart = () => {

  const {cart, setCart, clear, cantidad, setCantidad} = useContext(CartContext)

  /* const quitar2 = () => {
  } */

  /* const deleteItem = () => {
    const buttonDelete = document.querySelectorAll(".inputQuitar");
    buttonDelete.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault()
            let deleteProduct = cart.findIndex(p => p.id === parseFloat(e.currentTarget.id))
            cart.splice(deleteProduct, 1)
            deleteItem()
        })
    })
  } */

    //obtener el total de la compra
    const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)


  return (
    <div className='cart-all'>
        <div className='carro-container'>
          <div className='carro'>
            {cart.map((p) => {
              return (
                <div key={p.id} className='item-carro'>
                      <h2>X{p.quantity}</h2>
                      <img src={p.img} className='img-cart' alt={p.title} />
                      <span className="material-symbols-outlined"> {p.icon} </span>
                      <h1>{p.title}</h1>
                      <p>$ {p.price}</p>
                      <button onClick={
                        () => {
                          setCart(cart.filter((prod) => prod != p ))
                          setCantidad(cantidad - p.quantity)
                          toast.info('Eliminaste un producto', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                        }
                        }
                        className='inputQuitar'>Quitar ✖</button>
                  </div>
                )
              })
            }
          {
            cart.length > 0 ? 
            <>
              <button className="noselect" onClick={clear}><span className="text">Vaciar</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
              <p className='precio-total'>TOTAL A PAGAR: ${total}</p>
            </>
            :
            <CartVacio/>
          }
        </div>
      </div>
      <ToastContainer />
      {
        cart.length > 0 ? 
        <FormularioCompra />
        :
        <></>
      }
    </div>
  )
}

export default Cart