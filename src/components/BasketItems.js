import React from 'react'
import Product from './Product'

export default function BasketItems({ item, product }) {
    return (
        <div>

            <> {product.title} x {item.amount}</>

        </div>
    )
}
