import { Component } from 'react';
import "./navbar.css";
import MenuItems from './MenuItems';
import { FaList, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


class Navbar extends Component {

    state = { clicked:false }
    handleClick = () => {
      this.setState({clicked : !this.state.clicked})
    }

  render() {
    return (
        <nav className='navbarItems'>
           <h1 className='navbar__logo'>Trippy</h1>
    
           <div className='menu__icom' onClick={this.handleClick}>
               {this.state.clicked ? <FaTimes/> : <FaList/>} 
           </div>
                    
           <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
             {MenuItems.map((item, index) => {
                 return(
                    <li key={index}> <Link className={item.cName} to={item.url}><span className='icon'>{item.icon}</span> {item.title}</Link> </li>
                 );
             })}
             <div className='navbar__btn'>
                <a href="/signup">Sign up</a>
             </div>
           </ul>
        </nav>
      )
  }
}

export default Navbar;