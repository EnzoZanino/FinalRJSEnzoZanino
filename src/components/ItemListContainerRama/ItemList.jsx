import React from 'react'
import Item from './Item'

const ItemList = ({productFiltered}) => {
    return (
        <>
            {
                productFiltered.map((p) => {
                    return (
                            <Item key={p.title} prod={p}/>
                        )
                })
            }
        </>
    )
}

export default ItemList