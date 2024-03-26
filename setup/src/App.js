import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {  
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list1, setList1] = useState(new Values('#f15025').all(10));

  const handelSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList1(colors);
      console.log(color.hex);
    }
    catch( error ){
      setError(true);
      console.log("Error occured")
    }
  }

  return (
  <>
    <section className="container">
      <h3>Color Generator Project</h3>
      <form onSubmit={handelSubmit}>
        <input className={error ? 'error' : null} type="text" 
        onChange={(e)=>{
          setColor(e.target.value)
        }} 
        placeholder='#f15025'/>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </section>
    <section className="colors">
      {list1.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
  </>);
}

export default App
