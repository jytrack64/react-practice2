// useRef를 사용하여, Click to Reset 버튼을 클릭하면
// input의 value를 초기화하도록 만들기

import React, {useRef} from 'react'

export default function Practice1() {
  const input = useRef(null);
  const handleClick = () => {
    // 화면에 그려지기 전까지는 input.current가 null이다.
    // input.current가 유효한지 체크하는 것!
    if (input.current) {
      console.log(input.current);
      console.log(input.current.value);
      input.current.value = null;
      input.current.disabled = true;
    }
  }
  return (
    <div>
      <input type="text" ref={input} />
      <button type="button" onClick={handleClick}>Click to Reset</button>
    </div>
  )
}
