// App.jsx
import React from 'react';
import styles from './App.module.css';
import Display from './components/display';
import ButtonsContainer from './components/buttonsContainer';

function App() {
  return (
    <div className={styles.calculator}>
      <Display/>
      <ButtonsContainer/>
    </div>
  );
}

export default App;
