/** @format */

import React from 'react';

class Clock extends React.Component {
   increment = () => {
      this.setState((prevState) => ({
         count: prevState.count + 1
      }));
   };

   decrement = () => {
      this.setState((prevState) => ({
         count: prevState.count - 1
      }));
   };

   render() {
      return (
         <div>
            <h2>Time : {this.props.times.toLocaleTimeString()}</h2>
            {/* <br />
            <h2>The currentcount is : {this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button> */}
         </div>
      );
   }
}
export default Clock;
