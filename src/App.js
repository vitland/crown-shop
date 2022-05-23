import {  useEffect } from 'react';
import { Route, Routes  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments
} from './utils/firebase/firebase.utils';

import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import { Authentication } from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';
import { setCategories } from './store/categories/category.action';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => { 
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesArray))
     }
     getCategoriesMap()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
