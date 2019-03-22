import React, { Component } from 'react';
import './App.css';
import food from './data/foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';

class App extends Component {  
  state = {
    data: food,
    selectedFoods: [],
    search: '',    
    isShown: false,
    totalCalories: 0         
  }

  handleClick =() => {
    this.setState({
      isShown: !this.state.isShown      
    })    
  }  

  addFoodHandler = (theFood) => {    
    const foodCopy = [...this.state.data];
    foodCopy.push(theFood);
    this.setState({
      data: foodCopy
    })
  }

  handleChange =(e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleDelete =(name) => {
    const filtered = this.state.selectedFoods.filter((food) => {
      return food.name !== name
    })    
    const deletedFood = this.state.data.filter((food) => {
      return food.name === name
    }) 
    deletedFood[0].quantity = 0;
    this.setState({
      selectedFoods: filtered,
      totalCalories: this.state.totalCalories - (deletedFood[0].quantity * deletedFood[0].calories)      
    })        
  }

  addFoodToListHandler =(id, quantity) => {
    let addedFood = this.state.data[id];   
    if (!this.state.selectedFoods.includes(addedFood)) {
      addedFood.quantity += parseInt(quantity)   
      this.setState({
        selectedFoods: [...this.state.selectedFoods, addedFood],
        totalCalories: this.state.totalCalories + addedFood.quantity * addedFood.calories          
      })    
    } else {
      this.setState({        
        totalCalories: this.state.totalCalories + quantity * addedFood.calories        
      })      
      quantity ? addedFood.quantity += parseInt(quantity) : addedFood.quantity += 1
    }    
    
  }
  
  renderFoood =() => {      
    let filteredFood;
    this.state.search !== '' ?  filteredFood = this.state.data.filter((food) => {
      return food.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }) : filteredFood = this.state.data; 
    return filteredFood.map((food, index) => {
      return <FoodBox key={index} food={food} id={index} onAdd={this.addFoodToListHandler}/>
    })
  }
  
  renderList =() => {
    return this.state.selectedFoods.map((food, index) => {      
      return <FoodList key={`id-${index}`} food={food} foodArray={this.state.selectedFoods} onDelete={this.handleDelete}/>
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1 id="h1">Iron Nutrition</h1>        
        <input className="input search" onChange={this.handleChange} type="search" name="search" placeholder="Search..." />
        <button onClick={() => this.handleClick()} className="button is-primary is-big">Add new food</button>   
        {this.state.isShown && <AddFood addTheFood={this.addFoodHandler} onSubmit={this.handleClick}/>}     
        <div className ="flex">
          <div>
            {this.renderFoood()}
          </div>
          <div className="dayFood">
            <h2>Food of the day</h2>
            <ul>
              {this.renderList()}            
            </ul>
            <p>Total calories: {this.state.totalCalories}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
