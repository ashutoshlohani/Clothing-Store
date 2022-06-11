import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;
   const { addItemsToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext);

   const handleAdd = () => addItemsToCart(cartItem);
   const handleRemove = () => removeItemFromCart(cartItem);
   const handleDelete = () => deleteItemFromCart(cartItem);

   return (
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={name} />
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
            <div className='arrow' onClick={handleRemove}>
               &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={handleAdd}>
               &#10095;
            </div>
         </span>
         <span className='price'>{price}</span>
         <div className='remove-button' onClick={handleDelete}>
            &#10005;
         </div>
      </div>
   );
};

export default CheckoutItem;
