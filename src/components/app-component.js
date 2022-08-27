import React, {Component} from "react";
import Box from "./box-component.js";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

  state = {
    boxes: []
  }

  createBox = () => {
    const { boxes } = this.state;
    this.setState ({boxes:[...boxes, 0]})
  }
  onDelete = id => {
    function filterArray (number, index) {
      if(id === index) return false;
      else return true;
    }
    const updatedBoxes = this.state.boxes.filter(filterArray);
    this.setState({ boxes: updatedBoxes });
  }
  onIncrement = id => {
    const arr = [...this.state.boxes];
    arr[id]++;
    this.setState({ boxes: arr });
  }
  onDecrement = id => {
    const arr = [...this.state.boxes];
    arr[id]--;
    this.setState({ boxes: arr });
  }
  render(){
    return(
      <div style={ {margin:'50px'} }>
        <button className="btn btn-primary p-2" onClick={this.createBox}> Add Box </button>
        <br/>
        <br/>
        {
            this.state.boxes.map((number, index) => (
              <div key={index}>
                  <Box
                    num = {number}
                    id = {index}
                    onDelete = {this.onDelete}
                    onIncrement = {this.onIncrement}
                    onDecrement = {this.onDecrement}
                    />
                  <br/>
              </div>
            ))
        }
      </div>
    );   
  }
}

export default App;
