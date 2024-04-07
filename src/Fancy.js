/** @format */

import './css/table.css';

function FancyBorder(props) {
   return (
      <div className={`fancyborder fancyborder-${props.color}`}>
         {props.children}
      </div>
   );
}

function Dialog(props) {
   return (
      <FancyBorder color="red">
         <h1 className="dialog-title">{props.title}</h1>
         <h2 className="dialog-message">{props.message}</h2>
      </FancyBorder>
   );
}

function WelcomeOclock() {
   return (
      <Dialog
         title="Welcome To QuocCity"
         message="The first time you visit QuocCity"
      />
   );
}
export default WelcomeOclock;
