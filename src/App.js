import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import DisplayData from "./components/DisplayData";


function App() {
  const [listData, setListData] = useState([])
  const addTransaction = (data)=>{
    
    setListData([...listData, data])
  }
  console.log(listData)
  return (
    <div className="App">
      <InputForm addTransaction={addTransaction} />
      
      <DisplayData listData= {listData} />
    </div>
  );
}

export default App;
