import { useState } from 'react';
import styles from './item.module.css';
const Item=({foodItem,bought,handleBuyButton})=>{

  return <li className={`${styles['kg-item']} list-group-item ${bought && 'active'}`} ><span className={styles['kg-span']}>{foodItem}</span>
  <button className={`${styles.button1} btn btn-info`} onClick={handleBuyButton}>buy</button></li>
};
export default Item;