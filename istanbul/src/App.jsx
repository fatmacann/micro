import React,{Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { columns, data } from "./data/data";

const Header = React.lazy(()=> import('ankara/Header'));
const Datatables = React.lazy(()=> import('ankara/Datatables'));

import addRow from 'ankara/addRow'

const App = () => {
  const[allData, setAllData] = useState(data)

  useEffect(()=>{
    if(data){
      setAllData(data)
    }
  },[])

  return (<div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading..</div>}>
      <Header/>
      <button
        onClick={() => 
        addRow(allData, setAllData, { 
        id: allData.length + 1, 
        title: 'istanbul',
        year: '1988',
        model:"2020",
        section:"text" 
      })
      }
        className="border px-3 text-sm cursor-pointer hover:bg-gray-100"
      >
        Ekle
      </button>
      <Datatables data= {allData} columns={columns}/>
    </Suspense>
    <div>Name: istanbul</div>
  </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
