import { NavLink } from 'react-router-dom';

import headerLogo from '../../../assets/pictures/header/vzuti_logo.png';

export const HeaderLogo = () => {
    return (
        <NavLink to='/main-page'><img src={headerLogo} alt='logo' className='w-[170px]' /></NavLink>
    );
};