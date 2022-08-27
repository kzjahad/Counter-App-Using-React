import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Box extends Component {
    constructor(props){
      super(props);
    }
    state = { 
        btn: 'btn btn-primary'
    } 

      increment = () => {
       this.props.onIncrement(this.props.id);
      };
      decrement = () => {
        this.props.onDecrement(this.props.id);
      };
      delete = () => {
        const {id} = this.props;
        this.props.onDelete(id);
      }

    render() { 
        return (
        <div>
           <button type="button" className={this.state.btn} onClick={this.decrement}> Decrement </button>
           <span className="p-3">{this.props.num}</span>
           <button type="button" className="btn btn-primary" onClick={this.increment}> Increment </button>
           <button type="button" className="btn btn-danger ms-4" onClick={this.delete}> Delete </button>
        </div>
        );
    }
}
 
export default Box;