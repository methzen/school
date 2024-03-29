import React, { Component } from 'react';


class Counter extends Component {

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}> {this.formatCount()}</span> 
            <button 
            onClick={()=>this.props.onIncrement(this.props.counter.id)}
            className='btn btn-secondary btn-sm m-2'> + </button>

            <button 
            onClick={()=>this.props.onDecrement(this.props.counter.id)}
            className='btn btn-secondary btn-sm m-2'> - </button>

            <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)}
            className='btn btn-danger btn-sm m-2'> Delete </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const  count=this.props.counter.value
        return count === 0 ? "Zero": count;
    }
}
 
export default Counter;