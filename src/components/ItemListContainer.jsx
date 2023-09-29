// import { useState, useEffect } from 'react'
import ItemList from './ItemListContainerRama/ItemList'
import { useParams } from 'react-router-dom'

/* CLASE 9
import { useParams } from 'react-router-dom'
CLASE 9 */

import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'

/* CLASE 13
importamos (collection, getDocs, getFirestore ...)
*/

import Loader from './Loader'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const ItemListContainer = () => {

/* CLASE6 */
    /* let products = [
        {
            "id": 1,
            "title": "Teclado Gamer",
            "price": 89.99,
            "description": "Cuenta con interruptores mecánicos de respuesta táctil, retroiluminación RGB, anti-ghosting, teclas programables y diseño ergonómico, es tu herramienta esencial para una experiencia de juego excepcional. ¡Mejora tu rendimiento y estilo con este teclado de alta gama!",
            "category": "Perifericos",
            "img": "https://www.arraysrl.com/Temp/App_WebSite/App_PictureFiles/ItemImages/463_800.jpg",
            "icon": "keyboard"
            },
        {
            "id": 2,
            "title": "Mouse Gamer",
            "price": 32.99,
            "description": "Este mouse cuenta con precisión láser, botones programables, retroiluminación RGB, diseño ergonómico y seguimiento de alta velocidad. Eleva tu nivel de juego con este periférico de alto rendimiento.",
            "category": "Perifericos",
            "img": "https://www.pccore.com.ar/5771-thickbox_default/mouse-usb-logitech-g-pro-x-superlight-negro-wifi.jpg",
            "icon": "mouse"
            },
        {
            "id": 3,
            "title": "PC Gamer",
            "price": 235.99,
            "description": "¡Potencia tus juegos con nuestra PC gamer de calidad en venta! Equipada con un procesador de última generación, tarjeta gráfica de alto rendimiento, amplia memoria y almacenamiento rápido, esta máquina ofrece un rendimiento de primera para tus aventuras digitales. Juega sin límites con nuestro PC gamer de calidad.",
            "category": "PCArmada",
            "img": "https://http2.mlstatic.com/D_NQ_NP_718229-MLA49569534638_042022-O.webp",
            "icon": "computer"
            }
    ] */

/* MOSTRAR PRODUCTOS + CONTADOR SUMA/RESTA CLASE 6
    // const mostrarProductos = new Promise((resolve, reject) => {
    //     if (productos.length > 0) {
    //         setTimeout(() => {
    //             resolve(productos)
    //         }, 5000)
    //     } else {
    //         reject("No hay productos para mostrar")
    //     }
    // })

    // mostrarProductos
    //     .then((resultado) => {
    //         console.log(resultado)
    //     }) 
    //     .catch((error) => {
    //         console.log(error)
    //     })
    
    // const [contador, setContador] = useState(0)
    
    // const sumar = () => {
    //     if (contador < 10) {
    //     setContador(contador + 1)
    //     } 
    // }
    
    // const restar = () => {
    //     if (contador > 0) {
    //     setContador(contador - 1)
    //     } 
    // }
Clase 6 */

/* Fetching CLASE7
    const getProducts = async () => {
        // const response = await fetch("https://fakestoreapi.com/products")
        const response = await fetch('stock.json')
        const data = await response.json()
        
        return data
    }

    const [product, setProduct] = useState([])

    useEffect(()=> {
        getProducts().then((product)=> setProduct(product))
    }, [])
Fetching */


    const {cart} = useContext(CartContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()

        // getDOCS CON S a diferencia de document.jsx

        const itemsCollection = collection(db, 'products')
        getDocs(itemsCollection).then((snapshot) => {
            /* if(snapshot.exists()) { */
            const docs = snapshot.docs.map((doc) => doc.data())
            /* console.log(docs) */
            setProducts(docs)
        })
    }, [])


    const { categoryId } = useParams()

    let productFiltered = products.filter((prod) => prod.category === categoryId)

    if ( categoryId === "Todos" ) {
        productFiltered = products
    } else if ( categoryId === undefined ) {
        productFiltered = products
    }

    return (
        <>
            {
                products.length === 0 ? <Loader />
                :
                <div className='row-productItem'>
                    <ItemList productFiltered={productFiltered}/>
                </div>
            }
            
        </>
    )
}

export default ItemListContainer

// useEffect(() => {
//     const db = getFirestore()

//     // getDOCS CON S a diferencia de document.jsx

//     const itemsCollection = collection(db, 'products')
//     getDocs(itemsCollection).then((snapshot) => {
//         /* if(snapshot.exists()) { */
//         const docs = snapshot.docs.map((doc) => 
//         ({
//              ...doc.data(), id: doc.id
//         }))
//         setProducts(docs)
//     })
// }, [])