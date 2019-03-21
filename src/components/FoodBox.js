import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {

  state = {
    quantity: 1
  }
  
  handleChange =(e) => {
    this.setState({
      quantity: e.target.value 
    })      
  }

  handleClick =(id) =>{
    let quantity = this.state.quantity
    this.props.onAdd(id, quantity)    
  }
 
  render() {    
    return(      
      
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.food.image} alt="food"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input onChange={this.handleChange}
                    className="input"
                    type="number" 
                    value={this.state.quantity}
                    name="quantity"
                  />
                </div>
                <div className="control">
                  <button onClick={() => this.handleClick(this.props.id)} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>     
      
    )
  }
}

export default FoodBox;