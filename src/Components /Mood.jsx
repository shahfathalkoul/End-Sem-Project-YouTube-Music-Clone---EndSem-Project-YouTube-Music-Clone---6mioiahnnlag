import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './SideBar';
import MoodButtons from './MoodButtons';
import MyCarousel from './Carousel';
import AudioPlayer from './AudioPlayer'

const Mood = ({ isLogin, setIsLogin }) => {
    const { mood } = useParams();
    const [activeButton, setActiveButton] = useState(mood);

    useEffect(() => {
        setActiveButton(mood);
    }, [mood]);

    const moods = [
        { title: 'Happy', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=happy' },
        { title: 'Romantic', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic' },
        { title: 'Excited', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=excited' },
        { title: 'Sad', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=sad' },
        { title: 'Angry', api: 'https://academics.newtonschool.co/api/v1/musicx/song?mood=angry' },
    ];

    const getMoodApi = (mood) => {
        const moodData = moods.find(m => m.title.toLowerCase() === mood);
        return moodData ? moodData.api : null;
    };

    const renderMoodContent = () => {
        const api = getMoodApi(mood);
        if (api) {
            return <MyCarousel title={mood.charAt(0).toUpperCase() + mood.slice(1)} api={api} value={4} isLogin={isLogin} />;
        } else {
            return <div className='text-white'>Select a mood</div>;
        }
    };

    return (
        <div className='h-full bg-black'>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
            <div className="flex">
                <Sidebar isLogin={isLogin}/>
                <div className="flex ml-[17%] pt-16">
                    <MoodButtons activeButton={activeButton} setActiveButton={setActiveButton}/>
                </div>
            </div>
            <div className="ml-[17%] overflow-y-auto ">{renderMoodContent()}</div>
            <AudioPlayer/>
        </div>
    );
};

export default Mood;