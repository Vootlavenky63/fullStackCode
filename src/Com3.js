import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [receiveData, setreceiveData] = useState([]);
  // const [state, setstate] = useState(initialState)
//   const [frog, setfrog] = useState(false)
  const getData = () => {
    // axios
    //   .get("http://localhost:8080")
      axios.post('/songs', "http://localhost:8080",{
        title: 'Fred',
        singer: 'Flintstone',
        listen:true
      })
      .then(res => res.data)
      .then(res => setreceiveData(res))
  };
  useEffect(() => {
    getData()
    // console.log("I changed because of frog")
  },[]);         
// },[frog]);         

  return (
    <div>

    {/* <button onClick={()=>setfrog(!frog)}>Refresh</button> */}
    <div className="App">
      {receiveData.map(onedata => (
        <div>
          <h1>{onedata.title}</h1>
          <h1>{onedata.singer}</h1>
        </div>
      ))}
    </div>
      </div>
  );
}

export default App;
import React, { useState } from "react";

export default function App() {
  const [name, setname] = useState("venky");
  const [name2, setname2] = useState("Avinash");
  const [what, setwhat] = useState(true);
  return (
    <div>
      
      <button onClick={()=>setwhat(!what)}>Toggle</button>
      <h1>{what?<h1>{name}</h1>:<h1>{name2}</h1>}</h1>


    </div>
  );
}
