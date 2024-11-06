import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import SongTemplate from './SongTemplate';
import '../css/custom-carousel.css';

const MyCarousel = ({ title, api, isLogin ,value}) => {
    const [songs, setSongs] = useState([]);
    const audioRef = useRef(null);
    const jwt = localStorage.getItem('accessToken')

    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 6, numScroll: 3 },
        { breakpoint: '1199px', numVisible: 6, numScroll: 3 },
        { breakpoint: '767px', numVisible: 4, numScroll: 2 },
        { breakpoint: '575px', numVisible: 3, numScroll: 1 }
    ];

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch(api, {
                    headers: {
                        'projectID': 'evyu4sw99lon',
                        'Authorization': `Bearer ${jwt}`
                    }
                });
                const data = await response.json();
                setSongs(data.data || []);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };

        fetchSongs();
    }, [api,jwt]);

    return (
        <div className="my-carousel">
            <div className="bg-black text-white m-5 relative custom-carousel">
                <h1 className="font-semibold text-3xl pl-2 pt-2">{title}</h1>
                <Carousel
                    value={songs}
                    numVisible={value}
                    numScroll={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={(song) => (
                        <SongTemplate song={song} isLogin={isLogin} audioRef={audioRef} />
                    )}
                />
            </div>
        </div>
    );
};

export default MyCarousel;
