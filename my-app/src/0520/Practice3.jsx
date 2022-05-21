// useRef를 사용하여, Click to Reset 버튼을 클릭하면
// input의 value를 초기화하도록 만들기
// input 위에 현재 value를 알려주는 문구 추가하기

import React, {useState} from 'react'

export default function Practice3() {
  const input = React.useRef(null);
  const [value, setValue] = useState("");

  const handleClick = (props) => {
    setValue('');
    if(input.current) {
      input.current.focus();
    }
  }

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <div>현재 value는 {value}입니다.</div>
      <input type="text" ref={input} value={value} onChange={handleChangeInput} />
      <button type="button" onClick={handleClick}>Click to Reset and Focus!</button>
    </div>
  )
}
