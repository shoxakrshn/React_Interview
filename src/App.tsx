import { useEffect } from 'react';
import './App.css';
import List from './components/List';
import { useAppDispatch } from './store/hooks';

import { initState } from './store/cart.slice';
import { items } from './data';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initState(items));
  }, [dispatch]);

  return <List />;
};

export default App;
