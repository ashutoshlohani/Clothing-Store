import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CartItems from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import '../../routes/navigation/navigation.styles.scss';

const CartDropdown = () => {
   const { cartItems, cartCount, setIsCartOpen } = useContext(CartContext);
   const navigate = useNavigate();

   const handleGoToCheckout = () => {
      navigate('/checkout');
      setIsCartOpen(false);
   };

   return (
      <div className='cart-dropdown-container'>
         {cartCount === 0 ? (
            <p style={{ textAlign: 'center' }}>Cart is empty!</p>
         ) : (
            <div className='cart-items'>
               {cartItems.map(item => (
                  <CartItems key={item.id} cartItem={item} />
               ))}
            </div>
         )}
         <Button onClick={handleGoToCheckout}>Checkout</Button>
      </div>
   );
};

export default CartDropdown;
