// useRef를 사용하여, Click to Reset 버튼을 클릭하면
// input의 value를 초기화하도록 만들기
// input 위에 현재 value를 알려주는 문구 추가하기

import React, {useRef, useState} from 'react'

export default function Practice2() {
  const input = useRef(null);
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (input.current) {
      input.current.value = '';
      setValue('');
    }
  }

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <div>현재 value는 {value}입니다.</div>
      <input type="text" ref={input} onChange={handleChangeInput} />
      <button type="button" onClick={handleClick}>Click to Reset</button>
    </div>
  )
}
