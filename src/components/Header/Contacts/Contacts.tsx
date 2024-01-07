import instagram from '../../../assets/pictures/header/instagram.png';
import telegram from '../../../assets/pictures/header/telegram.png';

export const Contacts = () => {
    return (
        <section className='flex flex-col justify-between mb-10 h-[75px]'>
            <div className='flex justify-center'>Follow us:</div>
            <div className='flex justify-between items-center w-[100px]'>
                <img src={instagram} alt='instagram' className='h-[40px]' />
                <img src={telegram} alt='telegram' className='h-[40px]' />
            </div>
        </section>
    );
};