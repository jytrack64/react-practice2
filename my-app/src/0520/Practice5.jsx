import React, {useRef, useState} from 'react'

export default function Practice5() {
  const [value123, setValue123] = useState("");

  return (
    <div>
      { value123 ? value123 : "빈 값임" }
      <br />
      <input type="text" 
      value={value123} 
      onChange = {(e) => setValue123(e.target.value)} />
  
      <button onClick={() => setValue123("")}>reset</button>
    </div>
  )
}