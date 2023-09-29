import {useState} from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

  // CONTEXT CART
  import { useContext } from 'react'
  // import { CartContext } from '../../context/ShoppingCartContext'
  import { CartContext } from '../../context/CartContext'

const FormularioCompra = () => {

  // CONTEXT CART
  const {cart} = useContext(CartContext)

  const [nombre, setNombre] = useState ("")
  const [email, setEmail] = useState ("")
  const [orderId, setOrderId] = useState (null)

  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()
    nombre === "" ? alert("campo nombre vacio") : alert(`Bienvenido, ${nombre}`)
    email === "" ? alert("campo email vacio") : alert(`Registrado con el mail: ${email}`)

    addDoc(ordersColecction, order).then(({id}) => setOrderId(id))

    // setCart([])
  }

  /* const order = {
    nombre, email
  } */

  const order = {
    buyer: { 
      nombre, email
    },
    items: cart.map(({id, title, price, quantity}) => ({
      id, title, price, quantity
    }))
  }

  // const orden = "orden" + (orden.length +        1)

  const ordersColecction = collection(db, "orden") /* `${orden}` */

  return (
    <>
      {/* <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

        <button type='submit' >Enviar</button>
      </form> */}

      <div className="h-80 flex items-center justify-center bg-form-container">
        <div className="relative">
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg  shadow-lg animate-pulse   bordes-form"></div>
          <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-100 ease-in-out">
            <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Formulario</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input className="w-full h-12 border border-gray-800 px-3 rounded-lg" /* text-center */ placeholder="Nombre" id="" name="" type="text" onChange={(e) => setNombre(e.target.value)}/>
              <input className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Email" id="" name="" type="email" onChange={(e) => setEmail(e.target.value)}/>
              <button className="w-full h-12 bg-teal-950 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
              {/* <a className="text-teal-950 hover:text-teal-950 text-sm" href="#">Forgot Password?</a> */}
              <h3 className="text-teal-950">Id de tu compra: </h3>
              <p className="text-teal-50 bg-teal-950 text-center"> {orderId} </p>
            </form>
          </div>
        </div>
      </div>

      {/* <h3>Id de tu compra: {orderId}</h3> */}
    </>
  )
}

export default FormularioCompra