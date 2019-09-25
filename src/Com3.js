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
      axios.post('/user', {
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