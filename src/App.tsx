import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import { Header } from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { NewOnes } from './components/NewOnes/NewOnes';
import { Promo } from './components/Promo/Promo';
import { Popular } from './components/Popular/Popular';
import { Returns } from './components/Returns/Returns';
import { Basket } from './components/Basket/Basket';
import { NotFound } from './components/NotFound/NotFound';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getAllBoots } from './redux/slices/boots/bootsSlice';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllBoots());
  }, [dispatch]);
  return (
    <div className='bg-black h-screen text-white flex'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/main-page'} />} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/new-ones' element={<NewOnes />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/basket' element={<Returns />} />
        <Route path='/delivery' element={<Basket />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
