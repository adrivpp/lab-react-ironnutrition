import React, { Component } from 'react';
import './App.css';
import food from './data/foods.json';
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';

class App extends Component {  
  state = {
    data: food
  }

  addFoodHandler = (theFood) => {    
    const foodCopy = [...this.state.data];
    foodCopy.push(theFood);
    this.setState({
      data: foodCopy
    })
  }

  render() {
    const items = this.state.data.map((food, index) => 
      <FoodBox key={index} food={food}></FoodBox>
    )
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <AddFood addTheFood={this.addFoodHandler}></AddFood>
        <input type="text" className="input" placeholder="Search..." />
        {items}
      </div>
    );
  }
}

export default App;
