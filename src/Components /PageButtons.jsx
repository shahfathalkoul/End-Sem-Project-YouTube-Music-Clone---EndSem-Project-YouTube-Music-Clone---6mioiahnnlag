import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PageButtons = ({ activeButton, setActiveButton }) => {
    const pages = [['songs', 'music'], ['albums', 'album'], ['artists', 'artist'], ['playlists', 'playlist']];
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.split('/').pop();
        const activePage = pages.find(([pageName, routeName]) => routeName === currentPath);
        if (activePage) {
            setActiveButton(activePage[0]);
        }
    }, [location, setActiveButton, pages]);

    const handleButtonClick = (pageName) => {
        setActiveButton(pageName);
    };

    return (
        <div className='flex ml-16 gap-6 mt-8'>
            {pages.map(([pageName, routeName]) => (
                <Link to={`/library/${routeName}`} key={pageName}>
                    <button
                        onClick={() => handleButtonClick(pageName)}
                        className={`rounded-md py-2 px-4 ${activeButton === pageName ? 'bg-white text-black' : 'bg-[#2C2B2F] text-[#C7C7C8]'
                        } transition-colors duration-200`}
                    >
                        {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default PageButtons;
