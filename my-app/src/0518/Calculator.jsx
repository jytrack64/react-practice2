import React, {useState} from 'react'

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  return (
    <>
      <input type="number" value={num1} onChange={(event) => setNum1(parseInt(event.target.value))} />
      +
      <input type="number" value={num2} onChange={(event) => setNum2(parseInt(event.target.value))}/>
      =
      <input type="number" disabled value={result} />
      <button type="button" onClick={() => setResult(num1+num2)}>계산</button>
    </>
  )
}
