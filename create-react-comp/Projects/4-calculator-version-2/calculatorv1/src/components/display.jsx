import styles from './display.module.css';
const Display=({calVal})=>{
  return <input className={styles.display} value={calVal} type='text'readOnly></input>
  
}

export default Display;