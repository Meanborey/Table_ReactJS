import './App.css';
import React,{useState,useEffect} from 'react';
import Table from './component/Table';


function App() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchData(){
          const res=await fetch("https://dummy.restapiexample.com/api/v1/employees");
          const json=await res.json();
        
          setData(json.data);
          
        }
        fetchData();
      },[])
  return (
    <>
  <Table fetchData={data}/>
    </>
  );
}

export default App;
