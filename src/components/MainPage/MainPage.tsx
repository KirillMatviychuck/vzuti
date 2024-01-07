import { LeftBlock } from './LeftBlock/LeftBlock';
import { RightBlock } from './RightBlock/RightBlock';

export const MainPage = () => {
    return (
        <div className='flex font-bold text-2xl w-[80%]'>
            <LeftBlock />
            <RightBlock />
        </div>
    );
};