import { createContext, useContext, useEffect, useState } from 'react';
import { UseAllProducts } from '../hooks/UseApi';

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState(''); // this is word in input search box & you can use it in search function
  const [category, setCategory] = useState(''); // this category word come frome list categorys && you can use it in categorys search function
  const [autoCompletListOpen, setautoCompletListOpen] = useState(false); // show & hide auto complet search box

  const { data } = UseAllProducts();
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const Stor = () => {
  return useContext(DataContext);
};
