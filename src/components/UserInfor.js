/** @format */

import React from 'react';

class UserInfor extends React.Component {
   state = {
      name: 'Quoc',
      age: 30,
      address: 'HCM'
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

export default UserInfor;
