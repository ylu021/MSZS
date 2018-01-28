import React from 'react';
import logo from 'logo.svg';
import './banner.css';
import {Link} from 'react-router-dom';
import {menuLink} from '../const';

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

let logined = false;
const menu1 = ['home', 'explore', 'about'];
const menu2 = ['login', 'join us'];
if(logined) {
  menu1.push('create');
  menu2.pop();
}
const UserMenu = ({user}) => (
  <div>
    User *|_A|*
  </div>
)

const capitalizeText = (text) => text[0].toUpperCase() + text.substring(1)

const Menu = ({user}) => (
  <div className='banner-menu'>
    <ul className='banner-menu-site'>
      {menu1.map((menu) => {
        let classes = [];
        if (menu === 'create') {
          classes.push('banner-menu-signup');
        }
        return <li key={menu}>
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
  </div>
);

const Banner = ({ user }) => (
	<header className='banner'>
    <LogoFraction/>
    <Menu user={user} />
	</header>
);

export default Banner;
