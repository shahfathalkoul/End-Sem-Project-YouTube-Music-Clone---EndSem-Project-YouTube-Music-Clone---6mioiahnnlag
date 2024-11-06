import Sidebar from '../Components /SideBar';
import Navbar from '../Components /Navbar';
import MyCarousel from '../Components /Carousel';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import MoodButtons from '../Components /MoodButtons';
import AudioPlayer from '../Components /AudioPlayer';

function Home({ isLogin, setIsLogin }) {
    const [activeButton, setActiveButton] = useState('');

    const carousels = [
        { title: 'Trending Songs', api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs' },
        { title: 'Top 20 of this week', api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week' },
        { title: 'Top 50 of this month', api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month' },
        { title: 'Evergreen melodies', api: 'https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies' },
        { title: 'Happy', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=happy' },
        { title: 'Romantic', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic' },
        { title: 'Excited', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=excited' },
        { title: 'Sad', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=sad' }
    ];

    return (
        <div className='h-full bg-black'>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
            <div className="flex">
                <Sidebar isLogin={isLogin} />
                <div className='bg-black ml-[17%] pt-16 overflow-y-auto w-full'>
                    <MoodButtons activeButton={activeButton} setActiveButton={setActiveButton} />
                    {carousels.map((carousel, index) => (
                        <MyCarousel key={index} title={carousel.title} api={carousel.api} isLogin={isLogin}  value = {6}/>
                    ))}
                </div>
            </div>
            <AudioPlayer />
        </div>
    );
}

export default Home;
