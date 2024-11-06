import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Components /SideBar';
import Navbar from '../Components /Navbar';
import PageButtons from '../Components /PageButtons';
import Songs from '../Components /Songs';

function Library({ isLogin, setIsLogin }) {
    const { page } = useParams();
    const [activeButton, setActiveButton] = useState('songs');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        setActiveButton(page);
    }, [page]);

    const renderPageContent = () => {
        switch (page) {
            case 'music':
                return <Songs />;
            case 'album':
                return <div className='text-white'>Sad Content</div>;
            case 'artist':
                return <div className='text-white'>Angry Content</div>;
            case 'playlist':
                return <div className='text-white'>Excited Content</div>;
            default:
                return <div className='text-white'>Select a page</div>;
        }
    };

    return (
        <div className='h-full bg-black'>
            <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
            <div className="flex">
                <Sidebar isLogin={isLogin} />
                <div className="flex flex-col w-full mt-16">
                    <div className="ml-[17%]">
                        <PageButtons activeButton={activeButton} setActiveButton={setActiveButton} />
                    </div>
                    <div className='overflow-y-auto'>
                        {renderPageContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Library;