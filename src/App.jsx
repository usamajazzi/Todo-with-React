import { useState } from "react";


function App() {
  const [inpVal, setInpVal] = useState("")         //State to store input value 
  const [getData, setGetData] = useState([])       // state to store the list of items


  // Function to add a new items in a list

  function addFun() {   
    if(inpVal.trim() !== ""){
    setGetData([...getData,{name:inpVal, isChecked: false} ])
    setInpVal("")
  }
  }

  // Function to add line through on checked:

  function toggleFun(index){
    const updateValue = getData.map((item, i)=>{
      if(i === index){
        return {...item, isChecked : !item.isChecked}       // i only doing here to change isChecked value of that particular index 
      }else{
        return item                                         // otherwise return same value, we don't want to change anything
      }
      
  })
  setGetData(updateValue);
  }

  // Function to delete the specific list using Index

 function delFun(index){
  const updateValue = getData.filter((_, i)=> i !== index)           // it return new array so here it is saying return values of my new array execpt that is falso that index match the i
  setGetData(updateValue)
}
  
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="flex border-2 border-red-50 bg-white outline-none rounded-3xl mb-12 ">
        <input value={inpVal} onChange={(e) => { setInpVal(e.target.value) }} type="text" name="" id="" className="bg-white w-96 border-none px-4 font-semibold outline-none rounded-3xl text-gray-600" />
        <button onClick={addFun} className="text-white bg-blue-600 px-8 py-3 border-none outline-none rounded-3xl">Add</button>
      </div>
      
      {/* Render the list of items */}

      {getData.map((value, index) => (
        <div key={index} className="text-left flex mb-3 items-center py-1 bg-white text-black w-3/5 pl-2 pr-1 border-none outline-none rounded-3xl">

          <input className={`w-6 h-6 ml-4 mr-3 `} type="checkbox" checked={value.isChecked} onChange={()=>{toggleFun(index)}} />
          <p className={`text-base flex-1 break-words  ${value.isChecked ? 'line-through  text-gray-500' : ''}`}>{value.name}</p>
          
          <button onClick={()=>delFun(index)} className="text-white bg-blue-600 px-6 py-2 border-none outline-none rounded-3xl">Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App;

