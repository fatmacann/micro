import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Datatables from "./components/Datatables";
import { columns, data } from "./data/data";
import "./index.scss";
import addRow from './utils/addRow';

const App = () => {
  const [allData, setAllData] = useState(data);

  useEffect(() => {
    if (data) {
      setAllData(data);
    }
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <button
        onClick={() => 
        addRow(allData, setAllData, { 
        id: allData.length + 1, 
        title: 'stella',
        year: '1988',
        model:"2020",
        section:"text" 
      })
      }
        className="border px-3 text-sm cursor-pointer hover:bg-gray-100"
      >
        Ekle
      </button>
      <Datatables data={allData} columns={columns} />
      <div>Name: ankara</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
