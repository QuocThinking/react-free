/** @format */

import React from 'react';
import './css/table.css';
class TableBody extends React.Component {
   render() {
      const row = this.props.list.map((value, index) => {
         return (
            <tr key={index}>
               <th>{index}</th>
               <td>{value.language}</td>
               <td>{value.framework}</td>
            </tr>
         );
      });
      return <tbody className="tbody">{row}</tbody>;
   }
}
export default TableBody;
