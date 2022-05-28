import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Navigate } from "react-router-dom";

// import TestComponent from './TestComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const Mypage = () => {
//   const params = useParams();
//   let navigate = useNavigate();
//   console.log(params);

//   return (
//     <div>
//       안녕하세요 {params.id}님!
//       <br/>
//       <button onClick={() => {
//         navigate('/');
//       }}>로그아웃</button>
//     </div>
//   )
// }

const Main = () => {
  return(
    <Link to='/abc'>Hello</Link>
  )
}

root.render(
  // <React.StrictMode>
    // <App />
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Form />} />
          <Route path="/mypage/:id" element={<Mypage />} /> */}
          <Route path='/' element={<Main />} />
          <Route path='/hi' element={<Main />} />
          <Route path='*' element={<Navigate to='/hi' replace={true} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  //  {/* <TestComponent /> */}
  // </React.StrictMode>
  
);

reportWebVitals();
