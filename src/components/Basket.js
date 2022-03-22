import React from 'react'
import BasketItems from './BasketItems'

export default function Basket({ onClick, basket, Products, total }) {
    return (
        <div className='Basket'>

            <h3>Sepettekiler</h3>
            {basket.map(item =>
                <BasketItems item={item} product={Products.find(product => product.id === item.id)} />
            )}
            <p>Toplam ${total}</p>
            <button onClick={onClick}>Sepeti Sıfırla</button>
        </div>
    )
}
