import React, {Component} from 'react';
import logo from 'logo.svg';
import './banner.css';
import {Link} from 'react-router-dom';
import {menuLink} from './const';

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
const UserMenu = ({user}) => (
  <div>
    User *|_A|*
  </div>
)

const capitalizeText = (text) => text[0].toUpperCase() + text.substring(1)

const Menu = ({logined, user}) => {
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
          return <li key={menu}><UserMenu user={user}/></li>
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
  render() {
    return (
      <header className='banner'>
        <LogoFraction/>
        <Menu logined={localStorage.getItem('loggedIn')} user={null} />
    	</header>
    )
  }
}

export default Banner;
