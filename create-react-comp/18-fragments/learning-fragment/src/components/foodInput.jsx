import styles from './foodInput.module.css'
const FoodInput=({handleOnKeyDown})=>{

  // const hanleOnChange=()=>{
  //   console.log(event.target.value)
  // }
return <input className={styles.foodInputBox} type='text' placeholder='Enter Food Item Here'
 onKeyDown={handleOnKeyDown}></input>;
};
export default FoodInput;