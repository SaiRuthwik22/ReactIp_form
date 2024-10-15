import React, { useContext, useState } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../App'

function Firstpage() {
    let navigateto = useNavigate()
    const {pincode,setPincode} = useContext(DataContext)
  const [error,setError] = useState(false)
  function handle(e){
    setError(false)
    setPincode(e.target.value)
    
  }
  function handleClick(){
    let len = pincode.toString().length
    if(len<6 || len>6){
        setError(true)
    }
    else{
        navigateto("/pincode")
    }
  }
  return (
    <>
        <div className='firstpage'>
            <h3>Enter Pincode</h3>
            <input type="number" placeholder='Pincode' onChange={handle} />
            <button onClick={handleClick}>Lookup</button>
            {error && alert("Please Enter a 6 digit code.")}
        </div>

    </>
  )
}

export default Firstpage