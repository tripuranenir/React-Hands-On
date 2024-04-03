import React, { useState } from 'react'
import './App.css'
import FoodItems from './components/foodItems'
import ErrorMessage from './components/errorMessage'
import Container from './components/container'
import FoodInput from './components/foodInput'


function App() {
  // let foodItems=['dal','green Vege','Milk','Roti','Salad' ]; 
  let [foodItems,setFoodItems]=useState(['green Vege','Milk','Roti','Salad' ]);
  return ( 
  <>
  <Container>
  <h1 className='kg-heading'>Healthy Foods</h1>
  <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodInput handleOnKeyDown={(event)=>{
    if(event.key=='Enter')
      {console.log(event.target.value);
      let newFoodItem=event.target.value;
      event.target.value='';
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems);}
      }
      }>
  </FoodInput>
  <FoodItems items={foodItems}></FoodItems>
  </Container>

  <Container>
    <p>I am using this for the second time</p>
  </Container>
  </>

  );
}

export default App
