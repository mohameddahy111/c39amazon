import React, { useEffect } from 'react';
import {UseAllProducts} from '../../hooks/UseApi';
import  { HomePage } from '../../components'

export default function Home() {
  const {data}= UseAllProducts()
  return (
  <>
  <HomePage/>
  </>
  );
}
