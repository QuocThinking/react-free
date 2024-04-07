/** @format */

// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import PersonFile from './Person';

import './css/table.css';
import Person from './Person';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         time: new Date(),
         count: 0,
         data: [
            {
               id: 1,
               firstName: 'Java',
               lastName: 'Spring Boot'
            },
            {
               id: 2,
               firstName: 'JavaScript',
               lastName: 'NodeJS'
            },
            {
               id: 3,
               firstName: 'C#',
               lastName: 'ASP.NET'
            }
         ]
      };
   }
   updateTime = () => {
      this.setState({ time: new Date() });
   };

   changeFirstName = (event, id) => {
      const getElementById = this.state.data.findIndex((p) => p.id === id);
      const localFirstName = [...this.state.data];
      localFirstName[getElementById].firstName = event.target.value;
      this.setState({ data: localFirstName });
   };
   changeLastName = (event, id) => {
      const getElementById = this.state.data.findIndex((p) => p.id === id);
      const localLastName = [...this.state.data];
      localLastName[getElementById].lastName = event.target.value;
      this.setState({ data: localLastName });
   };

   render() {
      const personList = this.state.data.map((obj, index) => (
         <Person
            key={obj.id}
            firstName={obj.firstName}
            lastName={obj.lastName}
            changeFirstName={(event) => this.changeFirstName(event, obj.id)}
            changeLastName={(event) => this.changeLastName(event, obj.id)}
         ></Person>
      ));
      return (
         <div className="container">{this.state.data > 0 && personList}</div>
      );
   }
}

export default App;
