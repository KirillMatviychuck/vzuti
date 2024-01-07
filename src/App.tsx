import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header/Header';
import { AllShoes } from './pages/AllShoes/AllShoes';
import { Basket } from './pages/Basket/Basket';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFound } from './pages/NotFound/NotFound';
import { Popular } from './pages/Popular/Popular';
import { Promo } from './pages/Promo/Promo';
import { Returns } from './pages/Returns/Returns';
import { useAppDispatch } from './redux/hooks';
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
        <Route path='/new-ones' element={<AllShoes />} />
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
