import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/bhuli-logo.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

function Nav() {
   const { currentUser, setCurrentUser } = useContext(UserContext);

   async function handleSignOut() {
      await signOutUser();
      setCurrentUser(null);
   }

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
                  <span onClick={handleSignOut} className='nav-link'>
                     Sign Out
                  </span>
               ) : (
                  <Link to='/auth' className='nav-link'>
                     Sign In
                  </Link>
               )}

               <Link to='/cart' className='nav-link'>
                  Cart
               </Link>
            </div>
         </div>
         <Outlet />
      </>
   );
}

export default Nav;
