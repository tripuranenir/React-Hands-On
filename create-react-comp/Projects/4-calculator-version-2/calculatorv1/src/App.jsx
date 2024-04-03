// App.jsx
import React, { useState } from 'react';
import styles from './App.module.css';
import Display from './components/display';
import ButtonsContainer from './components/buttonsContainer';

function App() {

  let [calVal,setCalVal]=useState("");
  const handleButtonClick=(ele)=>{
    if(ele=='='){
      setCalVal(eval(calVal));
    }
    else if (ele=='C'){
      setCalVal("");
    }
    else{
    console.log(ele);
    let newString=calVal+ele;
    setCalVal(newString);
    console.log(calVal);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer handleButtonClick={handleButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
