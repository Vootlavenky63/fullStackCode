import React from 'react'

export default function Comp2(props) {
    return (
        <div>
            <h1>
                Comp 2

            </h1>
            {props.frog}
            <button style={{backgroundColor:"blue"}} onClick={() => props.setfrog("Comp2 Changed this App.js state from inside of Comp2 itself")
                

            }>Change App.js frog state from Comp2</button>
        </div>
    )
}
