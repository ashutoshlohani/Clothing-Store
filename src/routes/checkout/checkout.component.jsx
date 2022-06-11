import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext);

   return (
      <div className='checkout-container'>
         {cartTotal === 0 ? (
            <h2>You Don't have any items in your cart for checkout</h2>
         ) : (
            <>
               <div className='checkout-header'>
                  <div className='header-block'>
                     <span>Product</span>
                  </div>
                  <div className='header-block'>
                     <span>Description</span>
                  </div>
                  <div className='header-block'>
                     <span>Quantity</span>
                  </div>
                  <div className='header-block'>
                     <span>Price</span>
                  </div>
                  <div className='header-block'>
                     <span>Remove</span>
                  </div>
               </div>

               {cartItems.map(item => {
                  return <CheckoutItem key={item.id} cartItem={item} />;
               })}
               <span className='total'>Total: ₹{cartTotal}</span>
            </>
         )}
      </div>
   );
};

export default Checkout;
