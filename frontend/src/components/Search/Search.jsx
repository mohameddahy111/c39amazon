import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stor } from '../../context/DataContext';
import Cards from '../Home/Cards/Cards';

export default function Search() {
  const { data  , setKeyWord } = Stor();
  const parmas = useParams();
  const newList = data.filter(x => x.title === parmas.itemName);
  useEffect(()=>{
    setKeyWord('')
  },[])

  return (
    <>
      {newList ? newList.map((x, index) => <Cards data={x} key={index} />) : ''}
    </>
  );
}
