import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// **Fatch all products dont pass any thing**//
export const UseAllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function allProductes() {
    return await axios('https://dummyjson.com/products');
  }
  useEffect(() => {
    allProductes()
      .then(res => {
        setData(res.data.products);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return { data, loading, error };
};

//  *end function**//

//* search item must pass keyWord */
export const UseSearchProducts = keyWord => {
  const [item, setitem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function searchFun() {
    return await axios(`https://dummyjson.com/products/search?q=${keyWord}`);
  }
  useEffect(() => {
    searchFun()
      .then(res => {
        setitem(res.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, [keyWord]);
  return { item, loading, error };
};
//* End of search item  */

// *products/categories*/
export const UseCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function gitCategories() {
    return await axios.get('https://dummyjson.com/products/categories');
  }
  useEffect(() => {
    gitCategories()
      .then(res => {
        setCategories(res.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return {
    categories,
    loading,
    error,
  };
};
//*End categories */
// ** if you want fetch singl product pass id in params  set id name : id **//
export const UseSinglProducts = () => {
  const params = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function allProductes() {
    return await axios(`https://dummyjson.com/products/${params.id}`);
  }
  useEffect(() => {
    allProductes()
      .then(res => {
        setData(res.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, []);
  return { data, loading, error };
};


