import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import { UseAllProducts } from '../hooks/UseApi';

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState(''); // this is word in input search box & you can use it in search function
  const [category, setCategory] = useState(''); // this category word come frome list categorys && you can use it in categorys search function
  const [autoCompletListOpen, setautoCompletListOpen] = useState(false); // show & hide auto complet search box
  const [drawerPage, setDrawerPage] = useState(false);
  const [quantityvalue, setQuantityvalue] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState('');
  const { data } = UseAllProducts();
  useEffect(() => {
    if (localStorage.amazonec39 != null) {
      setCartItems(JSON.parse(localStorage.amazonec39));
    } else {
      setCartItems([]);
    }
    if (localStorage.userInfo != null) {
      setUserInfo(jwtDecode(localStorage.userInfo));
    } else {
      setUserInfo('');
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        keyWord,
        setKeyWord,
        category,
        setCategory,
        autoCompletListOpen,
        setautoCompletListOpen,
        drawerPage,
        setDrawerPage,
        quantityvalue,
        setQuantityvalue,
        cartItems,
        setCartItems,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const Stor = () => {
  return useContext(DataContext);
};
