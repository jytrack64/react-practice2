import React, {useState, useEffect} from 'react'

export default function Ex1() {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    let timer;
    if (value){
      timer = setTimeout(() => {
        console.log(value);
      }, 3000);
    }
    
    return () => {
      if(timer) {
        clearTimeout(timer);
      }
    }
  }, [value]);
  
  return (
    <>
      <input
        type="number"
        onChange={(e) => {setValue(e.target.value)}} 
      />
    </>
  );
}
