import { useEffect, useState } from 'react'
import {/* Firestore, */ doc, getDoc, getFirestore} from 'firebase/firestore'

const Document = () => {

    const [product, setProduct] = useState([])
    /* console.log(product) */

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "tecnologias", "3knmoRfcm27g9q5oPj7P")
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()) {
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])

    return (
        <div>
            <h1>
                Producto
                {
                    <div>
                        <h4>Product: {product.nombre}</h4>
                    </div>
                }
            </h1>
        </div>
    )
}

export default Document