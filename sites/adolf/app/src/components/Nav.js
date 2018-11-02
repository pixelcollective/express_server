import React, { Component } from 'react'

class Nav extends Component {
 render() {
   return (
   <nav className="navbar">
     <div className="container">
       <ul className="navbar-list">
         <li className="navbar-item"><a className="navbar-link" href="#intro">Meet Hitler</a></li>
         <li className="navbar-item">
           <a className="navbar-link" href="#" data-popover="#codeNavPopover">Learn about the Issues</a>
         </li>
         <li className="navbar-item"><a className="navbar-link" href="#examples">Shop</a></li>
         <li className="navbar-item"><a className="navbar-link" href="#examples">Get Involved</a></li>
         <li className="navbar-item">
           <a className="navbar-link" href="#" data-popover="#moreNavPopover">Donate</a>
         </li>
       </ul>
     </div>
   </nav>
  );
 }
}

export default Nav;