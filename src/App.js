import React,{useState} from 'react'
import Comp2 from './Comp2';
import Com3 from './Com3';

export default function App() {
  const [frog, setfrog] = useState("I am in App.js")
  return (
    <div>

      <Com3 />
      {/* {frog} */}
      {/* <h1>
        Start new. 
        Ask if you have doubts

      </h1>
        {frog}
      <Comp2 frog={frog} setfrog={setfrog}/> */}
    </div>
  )
}
