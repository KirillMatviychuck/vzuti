import { LeftBlock } from '../../components/MainPage/LeftBlock/LeftBlock';
import { RightBlock } from '../../components/MainPage/RightBlock/RightBlock';

export const MainPage = () => {
    return (
        <div className='flex font-bold text-2xl w-[80%]'>
            <LeftBlock />
            <RightBlock />
        </div>
    );
};