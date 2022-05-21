import React, {useState} from 'react'

export default function Calculator() {
  const [num1, setNum1] = useState([0]);
  const [num2, setNum2] = useState([0]);
  const [result, setResult] = useState(0);
  const [sign, setSign] = useState('');
  // flag가 true면 num2에 저장, flag가 false면 num1에 저장
  const [flag, setFlag] = useState(false);

  const handleClick = (e) => {
    if (!flag) { // 기호가 안 눌렸을 때
      setNum1([parseInt([...num1, e.target.name].reduce((a, b) => a + b, 0))]);
    }
    else { // 기호가 눌렸을 때
      setNum2([parseInt([...num2, e.target.name].reduce((a, b) => a + b, 0))]);
    }
  }

  const handleClickSign = (e) => {
    setFlag(true);
    if(e.target.name !== '=') {
      setSign(e.target.name);
      console.log(result);
    }
    
    if (e.target.name === '=') {
      if (sign === '+') {
        let temp = num1[0] + num2[0]; 
        setResult(temp);
        setNum1([temp]);
        setNum2([0]);
      }
      if (sign === '-') {
        let temp = num1[0] - num2[0]; 
        setResult(temp);
        setNum1([temp]);
        setNum2([0]);
      }
      if (sign === 'x') {
        let temp = num1[0] * num2[0]; 
        setResult(temp);
        setNum1([temp]);
        setNum2([0]);
      }
      if (sign === '÷') {
        let temp = num1[0] / num2[0]; 
        setResult(temp);
        setNum1([temp]);
        setNum2([0]);
      }
      if (sign === '%') {
        let temp = num1[0] % num2[0]; 
        setResult(temp);
        setNum1([temp]);
        setNum2([0]);
      }
    } 
  }

  console.log('num1: ', num1);
  console.log('num2: ', num2);
  console.log('\n');

  return (
    <div>
      <input value={result ? result : !flag ? num1 : num2}></input>
      <div>
        <button name="AC" onClick={() => {
          setNum1([0]);
          setNum2([0]);
          setResult(0);
          setFlag(false);
        }}>AC</button>
        <button name="+/-" onClick={handleClickSign}>+/-</button>
        <button name="%" onClick={handleClickSign}>%</button>
        <button name="÷" onClick={handleClickSign}>÷</button>
      </div>
      <div>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="x" onClick={handleClickSign}>x</button>
      </div>
      <div>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClickSign}>-</button>
      </div>
      <div>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClickSign}>+</button>
      </div>
      <div>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClickSign}>.</button>
        <button name="=" onClick={handleClickSign}>=</button>
      </div>
    </div>
  )
}
