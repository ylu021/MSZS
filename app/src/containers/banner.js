import React, {Component} from 'react';
import logo from 'logo.svg';
import './banner.css';
import {Link} from 'react-router-dom';
import {menuLink} from './const';
import {Auth} from '../routes';

const LogoFraction = () => (
  <div className='banner-site'>
    <div className='banner-logo'>
      <img src={logo} alt="logo" />
    </div>
    <div className='banner-title'>
      <span>FreeMaker</span>
    </div>
  </div>
);

let menu1 = ['home', 'explore', 'about'];
const menu1_login = ['home', 'explore', 'about', 'create'];
let menu2 = ['login', 'join us'];
const menu2_login = ['login'];
const UserMenu = (props) => (
  <div className='row'>
    <span>User {props.user}</span>
    <button onClick={props.handleLogout}>Logout</button>
  </div>
)

const capitalizeText = (text) => text[0].toUpperCase() + text.substring(1)

const Menu = ({logined, user, handleLogout}) => {
  if(logined) {
    menu1 = menu1_login;
    menu2 = menu2_login;
  }
  return (<div className='banner-menu'>
    <ul className='banner-menu-site'>
      {menu1.map((menu) => {
        let classes = [];
        if (menu === 'create') {
          classes.push('banner-menu-signup');
        }
        return <li className={classes.length? classes.join(' ') : ''} key={menu}>
          <Link to={menuLink[menu]['path']}>{capitalizeText(menu)}</Link>
        </li>
      })}
    </ul>
    <div className='banner-menu-separator'></div>
    <ul className='banner-menu-user'>
      {menu2.map((menu) => {
        let classes = [];
        if(menu === 'login' && logined) {
          return <li key={menu}><UserMenu user={user} handleLogout={handleLogout}/></li>
        }else {
          if (menu === 'join us') {
            classes.push('banner-menu-signup');
          }
          return (<li className={classes.length? classes.join(' ') : ''} key={menu}>
                      <Link to={menuLink[menu]['path']}>{capitalizeText(menu)}</Link>
                 </li>)
        }
      })}
    </ul>
  </div>);
};

class Banner extends Component {
  state = {
    logined: false
  }
  componentDidMount() {
    Auth.authenticate((logined) => {
      this.setState({logined});
    })
  }
  handleLogout = () => {
    Auth.signout((success) => {
      if(success) {
        window.location.reload();
      }
    })
  }
  render() {
    const user = JSON.parse(localStorage.getItem('user', '{}'));
    const username = user? user.name: null;
    return (
      <header className='banner'>
        <LogoFraction/>
        <Menu logined={this.state.logined} user={username} handleLogout={this.handleLogout} />
    	</header>
    )
  }
}

export default Banner;
