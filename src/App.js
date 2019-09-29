// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [receiveData, setreceiveData] = useState([]);
//   // const [state, setstate] = useState(initialState)
//   // const [frog, setfrog] = useState(false)
//   const getData = () => {
//     axios
//       .get("http://localhost:8080")
//       .then(res => res.data)
//       .then(res => setreceiveData(res))
//   };
// //   axios.post('/songs', "http://localhost:8080",{
// //     title: 'Fred',
// //     singer: 'Flintstone',
// //     listen:true
// //   })
// //   .then(res => res.data)
// //   .then(res => setreceiveData(res))
// // };
//   useEffect(() => {
//     getData()
//     // console.log("I changed because of frog")
//   },[]);
//   const deleteData=(id)=>{
//     console.log(id)
//     axios.delete(`http://localhost:8080/${id}`)
//   }
  

//   return (
//     <div>

//     {/* <button onClick={()=>setfrog(!frog)}>Refresh</button> */}
//     <div className="App">
//       {receiveData.map(onedata => (
//         <div key={onedata._id}>
//           <h1>{onedata.title}</h1>
//           <h1>{onedata.singer}</h1>
//           <h1>{onedata.name}</h1>
//           <h1>{onedata.listen}</h1>
//           <button onClick={()=>deleteData(onedata._id)}>delete</button>
//         </div>
//       ))}
//     </div>
//       </div>
//   );
// }

// export default App;



import React ,{useState}from 'react'
import axios from "axios";

export default function App() {
  const [input, setInput] = useState('')
  const [input1, setInput1] = useState('')
  const onFormSubmit=(event)=>{
    event.preventDefault()
    console.log(input);
    axios.post("http://localhost:8080",{
    name:input,
    listen:false,
    singer:input1
  }
    )
  }
  
  return (
    <form onSubmit={(e)=>onFormSubmit(e)}>
      <input type="text" onChange={(event) => setInput(event.target.value)}/>
      <input type="text" onChange={(event) => setInput1(event.target.value)
        
      }/>
      <input type="submit" value="submit"/>
      
      </form>

  )
}







