import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Carousel } from "primereact/carousel";
import AudioPlayer from './AudioPlayer';
import SongTemplate from './SongTemplate';

export default function Albums({ isLogin, setIsLogin }) {
    const [albums, setAlbums] = useState([]);
    const jwt = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/album', {
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'evyu4sw99lon',
                        'Authorization': `Bearer ${jwt}`
                    }
                });
                const data = await response.json();
                setAlbums(data.data || []);

            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };
        fetchAlbums();
        console.log(albums)
    }, [jwt]);

    const handleAlbumClick = (albumId) => {
        if(isLogin){
            console.log(albums)
            navigate(`/library/album/${albumId}`);
        }
        else{
            navigate('/signin')
        }


    };
    return (
        <div className='h-full bg-black pt-0'>
            <div className="flex">
                {/*<div className='bg-black ml-[17%] pt-16 overflow-y-auto w-full'>*/}
                    {/*{albums.length > 0 && albums.map((album) => (*/}
                    {/*    <div key={album._id} onClick={() => handleAlbumClick(album._id)}>*/}
                    {/*        <Carousel value={album.songs} numVisible={6} numScroll={4} itemTemplate={(song) => (*/}
                    {/*            <SongTemplate song={song} isLogin={isLogin} />*/}
                    {/*        )} />*/}
                    {/*    </div>*/}
                    ))}
                {/*</div>*/}
            </div>
            // <AudioPlayer />
        </div>
    );
}
