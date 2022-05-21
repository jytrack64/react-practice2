import React, {useState, useRef} from 'react'

export default function Practice4() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const idMsg = "유효하지 않은 id입니다.";
  const passwordMsg = "유효하지 않은 password입니다.";
  const idCheck = (id.length >= 6 && id.length <= 20);
  const passwordCheck = (password.length >= 12 && password.length <= 20);

  const handleChangeInput = (e) => {
    if(e.target.name === "id") {
      setId(e.target.value);
    }
    if(e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  const handleClick = () => {
    if ( !idCheck ) {
      alert(idMsg);
      setId('');
      // idRef.current.value='';
      idRef.current.focus();
    }
    else if ( !passwordCheck ) {
      alert(passwordMsg);
      setPassword('');
      passwordRef.current.focus();
    }
    else alert('회원가입 성공!');
  };

  return (
  <div>
    <div>
      <input type="text" name='id' ref={idRef} value={id} onChange={handleChangeInput} placeholder='6글자 이상 20글자 이하' />
      {id ? 
        idCheck ? null : idMsg
      : null}
    </div>
    <div>
      <input type="text" name='password' ref={passwordRef} value={password} onChange={handleChangeInput} placeholder='12글자 이상 20글자 이하' />
      {password ? 
        passwordCheck ? null : passwordMsg
      : null}
    </div>
    <button type="button" onClick={handleClick} disabled={
      (id || password) ? false : true 
      }>회원가입</button>
  </div>
  );
}

