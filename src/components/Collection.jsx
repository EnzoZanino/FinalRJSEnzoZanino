import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore} from 'firebase/firestore'

const Collection = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()

        // getDOCS CON S a diferencia de document.jsx

        const itemsCollection = collection(db, 'tecnologias')
        getDocs(itemsCollection).then((snapshot) => {
            /* if(snapshot.exists()) { */
            const docs = snapshot.docs.map((doc) => doc.data())
            console.log(docs)
            setProducts(docs)
        })
    }, [])

    return (
        <div>
            <h1>Collection</h1>
            {
                products.map((p) => (
                    <div key={p.nombre} >
                        <h4>producto: {p.nombre}</h4>
                        <h5>categoria: {p.categoria}</h5>
                        <h6>${p.precio}</h6>
                    </div>
                ))
            }
        </div>
    )  
}

export default Collection