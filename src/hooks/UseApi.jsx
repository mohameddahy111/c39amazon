import axios from 'axios';
import { useEffect, useState } from 'react';

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
export const UseSinglProducts = params => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function allProductes() {
    return await axios(`https://dummyjson.com/products/${params}`);
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
  }, [params]);
  return { data, loading, error };
};

//*  get product buy  category   */
//*  you must pass the category   in params set category  name :category   */

export const UseSingleCategory = params => {
  const [categorie, setCategorie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getSingleCategory() {
    return await axios.get(`https://dummyjson.com/products/category/${params}`);
  }
  useEffect(() => {
    getSingleCategory()
      .then(res => {
        setCategorie(res.data.products);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [params]);
  return {
    categorie,
    loading,
    error,
  };
};

//* feche user  */
export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getAllComments() {
    return await axios.get('https://dummyjson.com/comments');
  }
  useEffect(() => {
    getAllComments()
      .then(res => {
        setComments(res.data.comments);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, []);
  return {
    comments,
    loading,
    error,
  };
};
//end//
// * git single user *//
export const useSingleUser = param => {
  const [oneUser, setOneUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getOneUser() {
    return await axios.get(`https://dummyjson.com/users/${param}`);
  }
  useEffect(() => {
    getOneUser().then(res => {
      setOneUser(res.data);
      setLoading(false);
      setError(null)
    }).catch(err=>{
      setError(err)
      setLoading(false)
    });
  }, []);
  return{
    oneUser , loading , error
  }
};
