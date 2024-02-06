import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { conx } from './module/ctxt';
import { Header } from './layout/Header';
function App() {
  const[mode,setMode]=useState('map')
  const chan=(a)=>{
    setMode(a)
  }
  return(
    <conx.Provider value={{mode,chan}}>
      <Header></Header>
    </conx.Provider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
