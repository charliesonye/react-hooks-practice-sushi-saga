import React, { useState,useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
const API = "http://localhost:3001/sushis";

function App() {
 
  const [sushiData, setSushiData] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      
      const sushiWithAddedProp = data.map((sushi)=> {
      return {...sushi, eaten: false}  
      })
      setSushiData(sushiWithAddedProp)
     
    })
      
  }, [])

  function handleEatSushi(eatenSushi){
    if(wallet >= eatenSushi.price){
      const updatedSushis = sushiData.map((sushi) => {
        if(sushi.id === eatenSushi.id) return {...sushi, eaten: true};
        return sushi ;
      })
      setSushiData(updatedSushis);
     
      
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert('Need more money')
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet)=> wallet + moreMoney)
  }

  return (
    <div className="app">
      <SushiContainer sushiData= {sushiData} onEatSushi={handleEatSushi} />
      
      <Table wallet = {wallet} onAddMoney = {handleAddMoney}/>
      
    </div>
  );
}

export default App;
