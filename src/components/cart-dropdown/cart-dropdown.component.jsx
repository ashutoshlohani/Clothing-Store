import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CartItems from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
   const { cartItems } = useContext(CartContext);
   return (
      <div className='cart-dropdown-container'>
         <div className='cart-items'>
            {cartItems.map(item => (
               <CartItems key={item.id} cartItem={item} />
            ))}
         </div>
         <Button>Checkout</Button>
      </div>
   );
};

export default CartDropdown;
