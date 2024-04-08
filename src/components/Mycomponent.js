/** @format */

import React from 'react';

class Mycomponent extends React.Component {
   state = {
      name: 'Henry',
      age: 18,
      address: 'TG'
   };
   render() {
      return (
         <div>
            <h1>My first Component</h1>
            <p>
               My name is {this.state.name} and I am form {this.state.address}
            </p>
         </div>
      );
   }
}
export default Mycomponent;
