import {useState,useEffect} from 'react'
import '../App.css'
//componets

function Buttons() {
 const [prevValue,setValue] = useState(5)

useEffect((e)=>{
  
},[])
 const set =(e)=>{  
  setValue(   prevValue +""+ e.target.value)  
 }
 if (prevValue === 911){
  console.log()
 }
  const numbers =[
    {
     number:0
    },{
      number:1
     },{
      number:2
     },{
      number:3
     },{
      number:4
     },{
      number:5
     },{
      number:6
     },{
      number:7
     },{
      number:8
     },{
      number:9
     }
  ]
  return (
    <div className='numbers-conteiner'>
      <input type="number" placeholder='enter the passworld' value={prevValue} />
     
    {numbers.map((number,i)=>(
        <button className="numbers" key={i} value={number.number} onClick={set}>{number.number} </button>
        
    ))} 
  </div>
)}

export default Buttons;