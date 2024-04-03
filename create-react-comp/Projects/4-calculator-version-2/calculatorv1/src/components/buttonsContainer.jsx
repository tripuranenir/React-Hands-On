import styles from './buttonsContainer.module.css';
const ButtonsContainer=({handleButtonClick})=>{
  const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return <div className={styles['button-container']}>
  {ButtonNames.map((ele)=><button key={ele} className={styles.button1} onClick={()=>handleButtonClick(ele)}>{ele}</button>)}
  </div>
}

export default ButtonsContainer;