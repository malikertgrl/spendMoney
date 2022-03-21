import React from 'react'

export default function Header({ total, cash }) {
    const mystyle = {
        // color: "pink",
        backgroundColor: "white",
        padding: "10px",
        margin: 10,
        fontFamily: "Arial",
        alignContents: "center",
        flex: 1
    };
    return (
        <div>
            <h1 style={mystyle} >
                {total ?
                    <>Harcayacak  ${cash - total} kaldı !</>
                    : <> Harcamak için ${cash}  var ! </>
                }</h1>

        </div>
    )
}
