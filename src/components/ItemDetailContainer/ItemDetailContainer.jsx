import ItemDetail from "./ItemDetail"
// import { useState, useEffect } from 'react'

import { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, doc, getFirestore} from 'firebase/firestore'

import Loader from "../Loader"

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

/* Fetching CLASE7
const getProducts = async () => {
    // const response = await fetch("https://fakestoreapi.com/products")
    const response = await fetch('../stock.json')
    const data = await response.json()
    
    return data
}

const [product, setProduct] = useState([])

useEffect(()=> {
    getProducts().then((product)=> setProduct(product))
}, [])
Fetching */

/* let product = [
    {
        "id": 1,
        "title": "Teclado Gamer",
        "price": 89.99,
        "description": "Cuenta con interruptores mecánicos de respuesta táctil, retroiluminación RGB, anti-ghosting, teclas programables y diseño ergonómico, es tu herramienta esencial para una experiencia de juego excepcional. ¡Mejora tu rendimiento y estilo con este teclado de alta gama!",
        "category": "Perifericos",
        "img": "https://www.arraysrl.com/Temp/App_WebSite/App_PictureFiles/ItemImages/463_800.jpg",
        "icon": "keyboard",
        "quantity": 0
        },
    {
        "id": 2,
        "title": "Mouse Gamer",
        "price": 32.99,
        "description": "Este mouse cuenta con precisión láser, botones programables, retroiluminación RGB, diseño ergonómico y seguimiento de alta velocidad. Eleva tu nivel de juego con este periférico de alto rendimiento.",
        "category": "Perifericos",
        "img": "https://www.pccore.com.ar/5771-thickbox_default/mouse-usb-logitech-g-pro-x-superlight-negro-wifi.jpg",
        "icon": "mouse",
        "quantity": 0
        },
    {
        "id": 3,
        "title": "PC Gamer",
        "price": 235.99,
        "description": "¡Potencia tus juegos con nuestra PC gamer de calidad en venta! Equipada con un procesador de última generación, tarjeta gráfica de alto rendimiento, amplia memoria y almacenamiento rápido, esta máquina ofrece un rendimiento de primera para tus aventuras digitales. Juega sin límites con nuestro PC gamer de calidad.",
        "category": "PCArmada",
        "img": "https://http2.mlstatic.com/D_NQ_NP_718229-MLA49569534638_042022-O.webp",
        "icon": "computer",
        "quantity": 0
        }
] */

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


// NO ANDUVO NO ANDUVO NO ANDUVO
// const {id} = useParams()
// const [products, setProducts] = useState([])

// useEffect(()=> {
//     const db = getFirestore()

//     const oneItem = doc(db, "products", `${id}`)
//     getDoc(oneItem).then((snapshot) => {
//         if(snapshot.exist()) {
//             const docs = snapshot.data()
//             setProducto(docs)
//         }
//     })
// }, [])
// NO ANDUVO NO ANDUVO NO ANDUVO

    return (
        products.length === 0 ? <Loader />
        :
        <div className="item-detail-container">
            <ItemDetail producto={products} />
        </div>
    )
}

export default ItemDetailContainer

