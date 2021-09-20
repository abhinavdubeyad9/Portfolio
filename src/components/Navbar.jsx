import React, { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <div className='navbar' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          <div exact to='/' className='nav-logo'>
            AD9
            <i className='fa fa-code'></i>
          </div>

          <ul className={`nav-menu ${click ? '' : 'res-close'}`}>
            <li className='nav-item'>
              <div
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                HOME
              </div>
            </li>
            <li className='nav-item'>
              <div
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                ABOUT
              </div>
            </li>
            <li className='nav-item'>
              <div
                activeClassName='active'
                className='nav-links'
                onClick={click ? handleClick : null}
              >
                PROJECTS
              </div>
            </li>
          </ul>

          <button
            className={`button button--ujarak button--border-medium button--round-s button--text-thick ${
              click ? '' : 'res-close'
            }`}
          >
            Hire Me!
          </button>

          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
