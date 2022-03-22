import React from 'react'
import Header from './Header'

export default function Product({ cash, total, item, basket, addBasket, removeBasket }) {

    const basketItem = basket.find(product => product.id === item.id)

    return (
        <div>
            <div key={item.id} className='Card'>
                <div className='Header-title'>{item.title}</div>

                <img src={item.image} alt="" />
                <div className='Price-Actions'>
                    <div className='Price'>price: ${item.price}</div>
                    <div className='Actions'>
                        <button className='sell-btn' disabled={!basketItem} onClick={() => removeBasket(item)} >Sat</button>
                        <span>{basketItem ? basketItem.amount : 0}</span>
                        <button className='buy-btn' disabled={cash - total >= item.price ? false : true} onClick={() => addBasket(item)} >Satın Al</button>

                    </div>
                </div>


            </div>
        </div >



    )

    //eğer ürünün ücreti kücükse kasadaki ücretten ürün satın alınabilir
}
