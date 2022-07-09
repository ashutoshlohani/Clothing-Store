import { createContext, useState, useEffect } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({ categoriesMap: {} });

export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
      const getCategoryMap = async () => {
         const categoryMap = await getCollectionAndDocuments();
         setCategoriesMap(categoryMap);
      };
      getCategoryMap();
   }, []);

   const value = { categoriesMap, setCategoriesMap };
   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};

//🔥 removing these cause they will set data to database every time they run

// import SHOP_DATA from '../shop-data';
// useEffect(() => {
//    addCollectionAndDocuments('products', SHOP_DATA);
// }, []);
