import React, {useState, useEffect} from 'react';

const arr = Array.from(Array(100), (_, i) => i+1);

export default function Calculator2() {
  const [result, setResult] = useState(0);
  const [inputs, setInputs] = useState({})
  
  const handleChangeInput = (event) => {
    // console.log(event);
    let key = event.target.name;
    // console.log("key", key);
    setInputs({
      ...inputs,
      // key : event.target.value,
      [key]: parseInt(event.target.value)
    })
    //console.log("useState : ", {...inputs});
  }

  // useEffect(() => {
  //   console.log("useEffect : " , inputs);
  // }, [inputs])
  

  const handleClickButton = (event) => {
    // let sum = 0;
    // Object.values(inputs).map((item) => setResult(sum += item));
    // setResult(sum);

    // setResult(Object.values(inputs).reduce((a, b) => a + parseInt(b, 10), 0));
    
    setResult(Object.values(inputs).reduce((a, b) => { 
      console.log(inputs);
      console.log(a);
      console.log(b);
      return (
        a + parseInt(b)
      )
    }, 0));
  }

  return (
    <>    
      {arr.map((num, i) => (
        <div key={num+i}>          
          <input type='number' name={`input-${num}`} onChange={handleChangeInput} />
          {i !== arr.length - 1 ? '+' : '='}
        </div>
        
      ))}
      <input type='number' disabled value={result} />
      <button type='button' onClick={handleClickButton}>계산</button>
    </>
  );
}
