import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { ReactComponent as BagIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

   const toggleCart = () => setIsCartOpen(!isCartOpen);

   return (
      <div className='icon-container' onClick={toggleCart}>
         <BagIcon className='icon' />
         <span className='item-count'>{cartCount}</span>
      </div>
   );
};

export default CartIcon;
