import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},

   cartItems: [],
   cartCount: 0,
   cartTotal: 0,

   addItemsToCart: () => {},
   removeItemFromCart: () => {},
   deleteItemFromCart: () => {},
});

const addCartItemFunction = (cartItems, productToAdd) => {
   const existingItem = cartItems.find(item => item.id === productToAdd.id);

   if (existingItem) {
      return cartItems.map(item =>
         item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
   }

   return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItemFunction = (cartItems, productToRemove) => {
   const existingItem = cartItems.find(item => item.id === productToRemove.id);

   if (existingItem.quantity === 1) {
      return cartItems.filter(item => item.id !== productToRemove.id);
   }

   return cartItems.map(item =>
      item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
   );
};

const deleteItemFromCartFunction = (cartItems, productToDelete) => {
   return cartItems.filter(item => item.id !== productToDelete.id);
};

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);

   useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCartCount(newCartCount);
   }, [cartItems]);

   useEffect(() => {
      const newCartTotal = cartItems.reduce(
         (total, cartItem) => total + cartItem.quantity * cartItem.price,
         0
      );
      setCartTotal(newCartTotal);
   }, [cartItems]);

   const addItemsToCart = productToAdd => {
      setCartItems(addCartItemFunction(cartItems, productToAdd));
   };

   const removeItemFromCart = productToRemove => {
      setCartItems(removeCartItemFunction(cartItems, productToRemove));
   };

   const deleteItemFromCart = productToDelete => {
      setCartItems(deleteItemFromCartFunction(cartItems, productToDelete));
   };

   const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      cartCount,
      cartTotal,
      addItemsToCart,
      removeItemFromCart,
      deleteItemFromCart,
   };

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
