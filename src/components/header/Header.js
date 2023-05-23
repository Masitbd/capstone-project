import React, { createElement, useRef, useState } from 'react';
import useWindowResize from '../../hooks/useWindowResize';
import { Logo } from '../Logo';
import { BurgerMenu } from './burgerMenu/BurgerMenu';
import navigation from '../../settings/navigation.json';
import './Header.css'
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { faCartShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const burgerRef = useRef(null);
    const menuRef = useRef(null);
    const { windowWidth } = useWindowResize();
    const [showMenu, setShowMenu] = useState(false);


    const menuOrientation = {
      'aria-orientation': windowWidth > 768 ? 'horizontal' : 'vertical',
      'aria-hidden': windowWidth < 768 && !showMenu ? 'true' : 'false',
    };


    const handleKeys = e => {
        switch (e.key) {
          // Close expanded mobile menu
          case 'Escape':
            if (showMenu) setShowMenu(false);
            break;
          default:
            break;
        }
      };
    
    return (
        <header>
            {
                windowWidth <768 && (
        <BurgerMenu
          ref={burgerRef}
          onClick={() => setShowMenu(prev => !prev)}
          active={showMenu}
          onKeyUp={handleKeys}
          ariaControls="LL-HeaderMenu"
         
        />
                  
                )
            }
            <Logo
        className="LL-HeaderLogo"
        src={
          'https://ik.imagekit.io/zenius/Coursera/html-css/Asset_16_4x_nnQ67G1HkI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674426270946'
        }
        height={windowWidth > 768 && windowWidth < 840 ? '50px' : '60px'}
      />

{ (
        <nav
          id="LL-HeaderMenu"
          role="menubar"
          className="LL-Navigation"
          ref={menuRef}
          {...menuOrientation}
        >
          <ul
            className="LL-NavigationMenuList"
            role="menu group"
            {...menuOrientation}
          >
            {navigation.map(({ id, name, title, link, url, state }) => {
              const Element = link === 'internal' ? Link : 'a';
              const linkProps =
                Element === 'a' ? { href: url } : { to: url, state };
              return createElement(
                'li',
                { key: id, name, role: 'menuitem' },
                <Element title={title} {...linkProps}>
                  {title}
                  
                </Element>
              );
            })}
          </ul>
        </nav>
      )}
       <nav role="menubar">
        <ul className="LL-IconsList" role="menu group">
          <li role="menuitem">
            <Icon title="Account" src={faUserCircle} size="xl" />
          </li>
          <li role="menuitem">
            <Icon title="Cart" src={faCartShopping} size="xl" />
          </li>
        </ul>
      </nav>
        </header>
    );
};

export default Header;