import { createContext, useState, useEffect } from 'react';

const addCartItemFunction = (cartItems, productToAdd) => {
   const existingItem = cartItems.find(item => item.id === productToAdd.id);

   if (existingItem) {
      return cartItems.map(item =>
         item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
   }

   return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemsToCart: () => {},
   cartCount: 0,
});

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCartCount(newCartCount);
   }, [cartItems]);

   const addItemsToCart = productToAdd => {
      setCartItems(addCartItemFunction(cartItems, productToAdd));
   };

   const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
