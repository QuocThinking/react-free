/** @format */

import React from 'react';

class Mycomponent extends React.Component {
   state = {
      name: 'Henry',
      age: 18,
      address: 'TG'
   };
   handleClick(event) {
      console.log('>> Click me');
      console.log('My name is', this.state.name);
   }
   handleOnMouseEnter(event) {
      console.log(event.pageX);
   }
   render() {
      return (
         <div>
            <h1>My first Component</h1>
            <p>
               My name is {this.state.name} and I am form {this.state.address}
               <button onClick={this.handleClick}>Click me</button>
               <button onMouseOver={this.handleOnMouseEnter}>Hover me</button>
            </p>
         </div>
      );
   }
}
export default Mycomponent;
