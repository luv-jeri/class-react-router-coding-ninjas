import React from 'react';
import style from './Nav.module.css';

import useTheme from '../../context/Theme.context';
import { useAuth } from '../../context/UserContext';

import { useNavigate } from 'react-router-dom';

function Nav() {
  const { toggleTheme, theme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav>
      <div className={style.nav_container}>
        <div
          className={style.nav_title_wrapper}
          onClick={() => {
            navigate('/');
          }}
        >
          <img
            className={style.logo}
            src='https://cdn-icons-png.flaticon.com/512/4228/4228133.png'
            alt='logo'
          />
          <h4>Coding Samurai</h4>
        </div>
        <div className={style.nav_details}>
          {user ? (
            <button
              onClick={() => {
                navigate('/courses');
              }}
            >
              Courses
            </button>
          ) : (
            <button
              onClick={() => {
                navigate('/signin');
              }}
            >
              Login
            </button>
          )}
          {user && (
            <button
              onClick={() => {
                logout();
              }}
            >
              LogOut
            </button>
          )}
          <button
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'light-theme' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
