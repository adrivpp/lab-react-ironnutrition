import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';


class AddFood extends Component {
  
  state = {
    name: '',
    calories: '',
    image: ''
  }  

  handleChange =(event) => {    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {    
    event.preventDefault();
    if(this.state.name && this.state.calories && this.state.image) {
      this.props.addTheFood(this.state);
      this.setState({
        name: '',
        calories: '',
        image: ''
      })
      this.props.onSubmit()
    } else {
      alert('All the fields must be complete')
    }

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label className="label">Name:</label>
          <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

          <label className="label">Calories:</label>
          <input className="input" type="text" name="calories" value={this.state.calories} onChange={this.handleChange}/>
        
          <label className="label">Image:</label>
          <input className="input" type="text" name="image" value={this.state.image} onChange={this.handleChange}/>

          <input className="button is-info" type="submit" value="Submit" />        
        </form>
      </div>
    )
  }
}

export default AddFood;