/** @format */
import React from 'react';

class DisplayMyInfo extends React.Component {
   state = {
      isShowListUser: true
   };
   handleOnShowHide = () => {
      this.setState({ isShowListUser: !this.state.isShowListUser });
   };
   render() {
      const { users } = this.props;
      // console.log(users);
      console.table(users);
      return (
         <div>
            <h1>My Info</h1>
            <div>
               <span onClick={() => this.handleOnShowHide()}>
                  {this.state.isShowListUser === true
                     ? 'Hide List User'
                     : 'Show List User'}
               </span>
            </div>
            <div>
               {users.map((user) => {
                  return (
                     <div>
                        {this.state.isShowListUser && (
                           <div
                              key={user.id}
                              className={+user.age > 18 ? 'green' : 'red'}
                           >
                              <h3>My name is {user.name}</h3>
                              <h3>I am {user.age}</h3>
                           </div>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default DisplayMyInfo;
