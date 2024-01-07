import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <section className='text-3xl font-cursive flex tracking-wider flex-col justify-between items-center h-[250px]'>
            <NavLink to={'/new-ones'}>Всі товари</NavLink>
            <NavLink to={'/promo'}>Акції</NavLink>
            <NavLink to={'/popular'}>Популярні</NavLink>
            <NavLink to={'/basket'}>Мої покупки</NavLink>
            <NavLink to={'/delivery'}>Умови доставки</NavLink>
        </section>
    );
};