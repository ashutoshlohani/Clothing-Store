import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { ReactComponent as Logo } from '../../assets/bhuli-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

function Nav() {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);

   return (
      <>
         <div className='navigation'>
            <Link to='/' className='logo-container'>
               <Logo className='logo' />
            </Link>

            <div className='links-container'>
               <Link to='/shop' className='nav-link'>
                  Shop
               </Link>

               <Link to='/contact' className='nav-link'>
                  Contact
               </Link>

               {currentUser ? (
                  <span onClick={signOutUser} className='nav-link'>
                     Sign Out
                  </span>
               ) : (
                  <Link to='/auth' className='nav-link'>
                     Sign In
                  </Link>
               )}

               <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
         </div>
         <Outlet />
      </>
   );
}

export default Nav;
