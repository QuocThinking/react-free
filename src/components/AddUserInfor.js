/** @format */

import React from 'react';

class AddUserInfor extends React.Component {
   state = {
      name: '',
      age: '',
      address: 'HCM'
   };
   handleOnChangeAge = (event) => {
      this.setState({
         age: event.target.value
      });
   };
   handleOnchangeName = (event) => {
      this.setState({ name: event.target.value });
   };
   handleOnSubmit = (event) => {
      event.preventDefault();

      this.props.handleAddNewUser({
         id: Math.floor(Math.random() * 100 + 1) + '-random',
         name: this.state.name,
         age: this.state.age
      });
   };
   render() {
      return (
         <div>
            <h1>I'm child</h1>
            My name is {this.state.name} and I am {this.state.age}
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
               <label>Your Name :</label>
               <input
                  value={this.state.name}
                  type="text"
                  onChange={(event) => this.handleOnchangeName(event)}
               />

               <label>Your age :</label>
               <input
                  value={this.state.age}
                  type="text"
                  onChange={(event) => this.handleOnChangeAge(event)}
               />
               <button type="submit">Submit</button>
            </form>
         </div>
      );
   }
}

export default AddUserInfor;
