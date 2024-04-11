/** @format */

import React from 'react';
import UserInfor from './UserInfor';
import DisplayMyInfo from './DisplayMyInfo';

class Mycomponent extends React.Component {
   state = {
      listState: [
         { id: 1, name: 'Le Quoc', age: 17 },
         {
            id: 2,
            name: 'Le Phong',
            age: 69
         },
         {
            id: 3,
            name: 'Le Lan',
            age: 45
         }
      ]
   };
   render() {
      return (
         <div>
            <h1>My first Component</h1>
            <UserInfor />
            <DisplayMyInfo users={this.state.listState} />
         </div>
      );
   }
}
export default Mycomponent;
