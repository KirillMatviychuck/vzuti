import { Basket } from './Basket/Basket';
import { MainPageHeels } from './MainPageHeels/MainPageHeels';
import { SearchLine } from './Search/SearchLine';

export const RightBlock = () => {
    return (
        <div className='relative w-1/2 h-full flex justify-center items-center'>
            <SearchLine />
            <Basket />
            <MainPageHeels />
        </div>
    );
};