import React from 'react'
import "./Header.css"

export default function Header({ total, cash }) {

    return (
        <div className='Header'>
            <>
                {total ?
                    <>Harcayacak <span>${cash - total}</span>  kaldı !</>
                    : <> Harcamak için <span>${cash}</span>   var ! </>
                }</>



        </div>
    )
}
