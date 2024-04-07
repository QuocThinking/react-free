/** @format */

import React from 'react';
import './Person.css';
class Person extends React.Component {
   renderFullName = () => {
      return `${this.props.firstName}  ${this.props.lastName}`;
   };

   render() {
      return (
         <div
            className="person"
            onClick={this.props.click}
         >
            <h1>Name : {this.renderFullName()}</h1> <br></br>
            <input
               type="text"
               placeholder="Enter first name"
               onChange={this.props.changeFirstName}
            ></input>
            <input
               type="text"
               placeholder="Enter last name"
               onChange={this.props.changeLastName}
            ></input>
         </div>
      );
   }
}
export default Person;
