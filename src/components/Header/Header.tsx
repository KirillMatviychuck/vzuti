import { Contacts } from './Contacts/Contacts';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { NavBar } from './NavBar/NavBar';
import { Number } from './Number/Number';

export const Header = () => {
    return (
        <div className='bg-stone-900 w-[20%] flex flex-col justify-between items-center'>
            <HeaderLogo />
            <NavBar />
            <Number />
            <Contacts />
        </div>
    );
};