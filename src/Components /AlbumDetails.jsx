import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongTemplate from './SongTemplate';

const AlbumDetails = ({ isLogin }) => {
    const { albumId } = useParams();
    const [album, setAlbum] = useState(null);
    const jwt = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/album/${albumId}`, {
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'evyu4sw99lon',
                        'Authorization': `Bearer ${jwt}`
                    }
                });
                const data = await response.json();
                setAlbum(data.data);
            } catch (error) {
                console.error('Error fetching album details:', error);
            }
        };

        fetchAlbumDetails();
    }, [albumId, jwt]);

    if (!album) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-full bg-black pt-0">
            <div className="flex flex-col items-center bg-black pt-16 overflow-y-auto w-full">
                <img src={album.image} alt={album.title} className="shadow rounded w-1/2" />
                <h2 className="text-white text-4xl mt-4">{album.title}</h2>
                <p className="text-gray-300 mt-2 text-center">{album.description}</p>
                <div className="mt-6">
                    {album.songs.length > 0 && album.songs.map((song) => (
                        <SongTemplate key={song._id} song={song} isLogin={isLogin} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlbumDetails;
