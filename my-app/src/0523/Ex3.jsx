import React, {useState, useEffect} from 'react'

function Ex3() {
  const MAX = 3;
  const [Value, setValue] = useState("");
  const [Time, setTime] = useState(MAX);

  // timer가 세 개니까 각각 관리를 해줘야 함..........
  // 변수 세 개로 관리해도 되는데 배열로 관리하는 게 더 깔끔하지..................
  useEffect(() => {
    let TimerIdArr = new Array(MAX);
    if(Value) {
      TimerIdArr[0] = setTimeout(() => {
        setTime(MAX - 1);
        TimerIdArr[1] = setTimeout(() => {
          setTime(MAX - 2);
          TimerIdArr[2] = setTimeout(() => {
            console.log(Value);
            setTime(MAX);
          }, 1000);
        }, 1000);
      }, 1000);
    }
    return () => {
      if(TimerIdArr) {
        console.log('cleanup');
        setTime(3);
        for (const id of TimerIdArr) {
          clearTimeout(id);
        }
      }
    }
  }, [Value]);

  // useEffect(() => {
  //   if (Time !== MAX)
  //     console.log(Time, "초 뒤 출력!");
  // }, [Time])
  
  
  return (
    <div>
      <input type="text" value={Value} onChange={(e) => {setValue(e.target.value)}} />
      <div>{Time}초 뒤 출력</div>
    </div>
  )
}

export default Ex3