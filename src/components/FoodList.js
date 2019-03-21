import React, { Component } from 'react';

class FoodList extends Component {  
  render() {        
    return(
      <li><button onClick={()=> this.props.onDelete(this.props.food.name)} className="button is-danger is-small" >X</button>{this.props.food.quantity} {this.props.food.name} = {this.props.food.calories * this.props.food.quantity} Cal</li>
    )
  }
}

export default FoodList