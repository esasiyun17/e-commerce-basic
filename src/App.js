import React from "react";
import "./App.css";
import Menu from "./components/Menu.js";
import Navi from "./components/Navi";

function App() {
  const products = {
    OPPO: {
      OPPOZ2: {
        brand: "OPPO",
        name: "OPPO RENO 2Z",
        price: "1000 $",
      },
      OPPO4: {
        brand: "OPPO",
        name: "OPPO RENO 4",
        price: "2000 $",
      },
    },
    Samsung:{
      SamsungS20:{
        brand:"Samsung",
        name : "Samsun S20",
        price :"1650$"
      }
    },
    IPhone: {
      IPhone12Pro: {
        brand: "IPhone",
        name: "IPhone 12 ProMax",
        price: "2500$",
      },
      IPhone11: {
        brand: "IPhone",
        name: "IPhone 11",
        price: "1450$",
      },
      IPhone11Pro: {
        brand: "IPhone",
        name: "IPhone 11 ProMax",
        price: "2000$",
      },
    },
    Xiaomi:{
      Xiaomi :{
        brand : "Xiaomi",
        name : "Xiaomi Redmi Note 8",
        price : "1000$"
      }
    }
  };
  return (
    <div className="App">
      <Navi />
      <Menu product = {products}/>
    </div>
  );
}

export default App;
