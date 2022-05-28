import React, {useState, useEffect} from 'react'

export default function Ex2() {
  const [value, setValue] = useState('');
  const [time, setTime] = useState(3);
  
  useEffect(() => {
    console.log("시작 , ", time);
    let timer;
    if (value){
      // timer = setTimeout(() => {
      //   setTime(time-1);
        
      //   if (time === 0) {
      //     console.log(value);
      //     setTime(4);
      //   }

      // }, 1000);

      timer = setTimeout( () => {
        // console.log(1);
        setTime(time-1);
        console.log(time);

        setTimeout( () => {
          // console.log(2);
          setTime(time-1);
          console.log(time);

          setTimeout( () => {
            // console.log(3);
            setTime(time-1);
            console.log(time);
            console.log(value);
          }, 1000);
        }, 1000);
      }, 1000);
    }
    console.log("끝 : ", time);
    return () => {
      if(timer) {
        console.log('cleanup');
        clearTimeout(timer);
        setTime(3);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  
  return (
    <>
      <input
        type="number"
        onChange={(e) => {setValue(e.target.value)}} 
      />
      <div>{time}초 남았습니다.</div>
    </>
  );
}
