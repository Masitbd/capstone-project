import React, { useRef, useState } from 'react';
import useWindowResize from '../../hooks/useWindowResize';
import { BurgerMenu } from './burgerMenu/BurgerMenu';


const Header = () => {

    const burgerRef = useRef(null);
    const { windowWidth } = useWindowResize();
    const [showMenu, setShowMenu] = useState(false);


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
        </header>
    );
};

export default Header;