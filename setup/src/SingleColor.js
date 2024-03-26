import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  return (
    <article className={index>10? `color color-light` : `color`}
    style={{backgroundColor: `rgb(${bcg})`}}
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(`#${hexColor}`);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }}
    >
      <p className='percentage-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  );
}

export default SingleColor
