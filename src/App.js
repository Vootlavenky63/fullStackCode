import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setdata] = useState([]);
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const onFormSubmit = event => {
    event.preventDefault();
    console.log(input);
    axios.post("http://localhost:8080", {
      name: input,
      listen: false,
      singer: input1
    });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      // .then(res=>console.log(res.data))
      .then(res => setdata(res.data));
    console.log(data);

    // console.log('hiii')
  }, []);
  const deleteData = id => {
    // console.log("id deleted")
    console.log(id);
    axios.delete(`http://localhost:8080/${id}`);
  };
  const editData = id => {
    // console.log("id deleted")
    // console.log(id);
    var name=prompt(`edit this name`)
    var singer=prompt(`edit this singer`)
    axios.put(
      `http://localhost:8080/${id}`,
      {
        title: "vjdj",
        singer: singer,
        name: name
      }
      // .then(res => console.log(res))
    );
  };
  return (
    <div>
      <form onSubmit={e => onFormSubmit(e)}>
        <input type="text" onChange={event => setInput(event.target.value)} />
        <input type="text" onChange={event => setInput1(event.target.value)} />
        <input type="submit" value="submit" />
      </form>
      {data.map(item => (
        <div key={item._id}>
          <h1>
            title:-{item.title} , singer:-{item.singer},name:-{item.name}
          </h1>
          {/* <h1>{item.singer}</h1> */}
          <button onClick={() => deleteData(item._id)}>delete</button>
          <button onClick={() => editData(item._id)}>edit</button>
        </div>
      ))}
    </div>
  );
}
