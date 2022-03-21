import React from 'react'
import Header from './Header'

export default function Product({ cash, total, item, basket, addBasket, removeBasket }) {

    const basketItem = basket.find(product => product.id === item.id)

    return (
        <div>
            <div key={item.id} className='Card'>
                <h5 className='Header-title'>
                    {item.title}
                </h5>

                <p className='Header-title'>price: ${item.price}</p>

                <div>
                    <button disabled={!basketItem} onClick={() => removeBasket(item)} >Sat</button>
                    <>{basketItem ? basketItem.amount : 0}</>
                    <button disabled={cash - total >= item.price ? false : true} onClick={() => addBasket(item)} >Satın Al</button>

                </div>

            </div>
        </div >



    )

    //eğer ürünün ücreti kücükse kasadaki ücretten ürün satın alınabilir
}
