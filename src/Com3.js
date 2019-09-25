import React from 'react'

export default function Com3(props) {
    return (
        <div>
            hello
            <button onClick={()=>props.setfrog("changed")}>click</button>
        </div>
    )
}
