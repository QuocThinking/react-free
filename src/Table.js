/** @format */

import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import './css/table.css';
class Table extends React.Component {
   render() {
      return (
         <div className="">
            <table className="table">
               <thead>
                  <tr>
                     <TableHeader />
                  </tr>
               </thead>
               <TableBody list={this.props.data} />
            </table>
         </div>
      );
   }
}

export default Table;
