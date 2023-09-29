import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Navegaciones/Cart'

// import ShoopingCartContext from "./context/ShoppingCartContext"
/* import { useContext } from 'react' */
import CartContext from "./context/CartContext"
import Loader from './components/Loader'

import { useState } from 'react'

import Document from './components/Document'
import Collection from './components/Collection'

function App() {

  const [load, setLoad] = useState(true)

  return (
    <BrowserRouter>
      
      <CartContext>
        <NavBar />
        <Routes>
          {/* <ItemListContainer greeting="Shop San Luis" />
          <ItemDetailContainer /> */}

          <Route exact path='/' element={<ItemListContainer/>}  />
          {/* <Route exact path='/' element={<Home/>}  /> */}

          <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
          
          {/* ¿¿¿¿¿¿¿¿¿¿ <Route exact path='/category/:id' element={<ItemDetailContainer/>}  /> ?????????? */}
          {/* <Route exact path='/about' element={<About/>}  /> */}

          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />

          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </CartContext>
      {/* <Loader loading={load}/> */}
      {/* <Document />
      <Collection /> */}
      <Footer /> 
      {/* // por fuera de CartContext */}

    </BrowserRouter>
  )
}

export default App