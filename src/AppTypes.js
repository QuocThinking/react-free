/** @format */

// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import PersonFile from './Person';
import './css/table.css';
import PersonList from './PersonList';
import Person from './Person';
class AppTypes extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         persons: [
            {
               id: 1,
               firstName: 'John',
               lastName: 'Smith',
               age: 30
            },
            {
               id: 2,
               firstName: 'Clark',
               lastName: 'Adam',
               age: 33
            }
         ]
      };
   }
   render() {
      return (
         <div className="container">
            {/* <PersonList persons={this.state.persons} /> */}
            <Person />
         </div>
      );
   }
}

export default AppTypes;
