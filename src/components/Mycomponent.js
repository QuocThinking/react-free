/** @format */

import React from 'react';

import DisplayMyInfo from './DisplayMyInfo';
import AddUserInfor from './AddUserInfor';

class Mycomponent extends React.Component {
   state = {
      listState: [
         { id: 1, name: 'Le Quoc', age: 17 },
         { id: 2, name: 'Le NguyeN', age: 67 },
         { id: 3, name: 'Le Mai', age: 57 }
      ]
   };
   handleAddNewUser = (userObj) => {
      console.log(`Check user data`, userObj);
      this.setState({
         listState: [userObj, ...this.state.listState]
      });
   };
   render() {
      return (
         <div>
            <h1>My first Component</h1>
            <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
            <DisplayMyInfo users={this.state.listState} />
         </div>
      );
   }
}
export default Mycomponent;
