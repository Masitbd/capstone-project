import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import './BurgerMenu.css';
/// get value forwardRef -- child component
export const BurgerMenu = forwardRef(
  ({ onClick, onKeyUp, active = false, ariaControls }, ref) => {
   
    return (
      <Button
        unstyled
        id="LL-BurgerMenu"
        onClick={onClick}
        onKeyUp={onKeyUp}
        ref={ref}
        ariaLabel={!active ? 'Open the Menu' : 'Close the Menu'}
        ariaControls={ariaControls}
        ariaExpanded={active}
        ariaPressed={active}
      >
        <div id="LL-BurgerIcon">
          <Icon src={!active ? faBars : faTimes} size="2x" />
        </div>
      </Button>
    );
  }
);
