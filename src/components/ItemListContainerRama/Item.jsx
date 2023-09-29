import { Link } from "react-router-dom"

const Item = ({prod}) => {

    /* const [contador, setContador] = useState(0)
    
    const sumar = () => {
        if (contador < 10) {
        setContador(contador + 1)
        } 
    }
    
    const restar = () => {
        if (contador > 0) {
        setContador(contador - 1)
        } 
    } */

    return (
        <div className='product-item'>
            {/* <span className="material-symbols-outlined"> {prod.icon} </span> */}
            <img src={`${prod.img}`} alt={`imagen de ${prod.title}`} className="img-item" />
            <h1>{prod.title}</h1>
            <p>${prod.price}</p>
            <Link to={`/item/${prod.id}`}>
                <button className='detalles'>Ir a detalles</button>
            </Link>
        </div>
    )
}

export default Item