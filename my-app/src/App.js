import React, {useEffect, useState} from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Calculator from './0518/Calculator';
// import Calculator2 from './0518/Calculator2';

// import Practice1 from './0520/Practice1';
// import Practice2 from './0520/Practice2';
// import Practice3 from './0520/Practice3';
// import Practice4 from './0520/Practice4';
// import Practice5 from './0520/Practice5';

// import Calculator from './0521/Calculator';

// import Ex1 from './0523/Ex1';
// import Ex3 from './0523/Ex3';

/*
const App = () => {
  const [num, setNum] = useState(0); //stateNum
  useEffect(() => {
    console.log("num이 바꼈음!", num)
  }, [num])
  
  return (
    <>
      <div>{num}</div>
      <button type="button"
      onClick={() => {
        // setNum(num + 1);
        // console.log(num);
        // setNum(num + 1);
        // console.log(num);
        setNum(num + 1);
        // console.log(num);
        setNum((num) => num + 1);
        setNum((prev) => {
          console.log("나 prev임!", prev);
          return num+1;
        });
      }}
      >
        +3
      </button>
    </>
  );
};
*/

/*
const names = [{
  name: 'hello',
}, {
  name: 'jin',
}, {
  name: 'bye',
}];

const App = () => {
  const [result, setResult] = useState([1]);
  // 배열을 state로 관리. setState.

  // step1. 배열을 하나 새로 만든다. >> 새로운 메모리 주소를 가지고 있는 배열.
  // step2. 배열에 대해서 작업을 함. let temp = [...state] // 
  // step3. setState[...아까 만든 배열]

  return (
    <>
      {result}
      <button type='button' onClick={() => {
        // setResult([...result, ...names.map(({name})=>name)]);

        console.log(names.map((e)=>e.name));
        console.log(...names.map((e)=>e.name));
        console.log(result);
        console.log(...result);

        // setResult(
        //   [...result, ...names.map((element) => {return element.name})]
        //   );
      }} >버튼</button>
    </>
  );
}
*/

/*
const App = () => {
  const [result, setResult] = useState([]);
  let arr = [];
  return (
    <>
      {result}
      <button type='button' onClick={() => {
        [1, 2, 3, 4].forEach((item) => {
          console.log(item);
          arr.push(item);
          const newResult = [...result, ...arr];
          console.log(newResult);
          setResult(newResult);
        })
        // const newResult = [...result, ...[1, 2, 3, 4]];
        // setResult(newResult);
      }}>버튼</button>
    </>
  )
}
*/

const App = () => {
  return (
    <div>
      App
    </div>
  )
  }
export default App;
