import React from 'react'
import { useDispatch } from 'react-redux';
function Form() {
    let dispatch = useDispatch()
  return (
    <div className='container'>Form
    <h2>Form</h2>
    <div className=''>
        <input type="number" placeholder='enter amount' />
    </div>
    <button className='btn btn-primary col-2'
    onClick = {() => {
    {dispatch({'type':"deposit", payload:2500})}
    }
}
    >Deposit</button>
    </div>
  )
}

export default Form;