import React, { useEffect, useState } from 'react'
import Products from "../Products.json"
import "./List.css"

import Product from "./Product"
import Header from "./Header"
import Basket from "./Basket"

export default function List() {

    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const cash = 20000000

    const addBasket = (item) => {
        // ürün sepette var mı diye kontrol ediyor
        const checkBasket = basket.find(product => product.id === item.id)
        if (checkBasket) {
            console.log("checkBasket", checkBasket)
            //ürün sepette varsa amount değerini arttırıyoruz
            checkBasket.amount += 1
            //aynı üründen 2 tane eklenmesin diye filtreleme işlemi yapıp,
            // sonra amount değeri arttırılmış ürünü ekliyoruz.
            setBasket([...basket.filter(product => product.id !== item.id), checkBasket])

            console.log("ürün zaten vcar")
        } else {
            setBasket([...basket, { amount: 1, id: item.id }])

        }
    }

    const removeBasket = (item) => {
        // ürünün amountunu 0'a kadar düşüreceğiz 0 ise listeden sileceğiz
        const checkBasket = basket.find(product => product.id === item.id)
        if (checkBasket.amount !== 0) {
            checkBasket.amount -= 1
            setBasket([...basket.filter(product => product.id !== item.id), checkBasket])

        }
        setBasket([...basket.filter(product => product.amount !== 0)])

    }


    useEffect(() => {
        //reduce ile toplama işlemi yapıyoruz
        //sepetteki elemanın amount'u ile
        //amountunu almış olduğumuz elemanın price'ını bulmak için find methoduyla id si aynı olan elemanı bulduk 

        setTotal(basket.reduce((acc, item) => {
            return acc + (item.amount * (Products.find(product => product.id === item.id).price))
        }, 0))
    }, [basket])


    return (
        <div className='InnerBody'>
            <div>
                <Header cash={cash} total={total} />

            </div>

            <div >
                <div className='List'>
                    {Products.map(item =>
                        <Product
                            key={item.id}
                            basket={basket}
                            item={item}
                            addBasket={addBasket}
                            removeBasket={removeBasket}
                            cash={cash}
                            total={total} />

                    )}
                </div>

                {basket.length > 0 ?
                    <div>
                        <Basket
                            basket={basket}
                            Products={Products}
                            total={total}
                            onClick={() => setBasket([])}
                        />

                    </div>
                    :
                    <></>
                }
            </div >
        </div>

    )
}
