/** @format */

import React from 'react';

class NameForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   handleChange(event) {
      this.setState({ value: event.target.value });
   }
   handleSubmit(event) {
      alert(`A name has been submitted: ${this.state.value}`);
      event.preventDefault();
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <h1>Name :{this.state.value}</h1>
            <input
               type="text"
               onChange={this.handleChange}
            />

            <input
               type="submit"
               value="submit"
            />
         </form>
      );
   }
}
export default NameForm;
