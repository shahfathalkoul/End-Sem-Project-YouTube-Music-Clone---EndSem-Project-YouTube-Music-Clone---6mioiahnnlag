import React, { useContext } from 'react';
import { faEllipsisV, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { AudioContext } from '../context/AudioContext';

const SongTemplate = ({ song, isLogin, audioRef }) => {
    const { isPlaying, setIsPlaying, setCurrentSong, currentSongId, setCurrentSongId } = useContext(AudioContext);
    const navigate = useNavigate();

    const jwt = localStorage.getItem('accessToken');

    const fetchSongDetails = async (songId) => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${songId}`, {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'evyu4sw99lon',
                    'Authorization': `Bearer ${jwt}`
                }
            });
            const data = await response.json();
            setCurrentSong(data.data);
        } catch (error) {
            console.error(`Error fetching song details for songId ${songId}:`, error);
        }
    };

    const handlePlayClick = () => {
        if (isLogin) {
            fetchSongDetails(song._id);
            setCurrentSongId(song._id);
            setIsPlaying(true);
        } else {
            navigate('/signin');
        }
    };

    const handlePauseClick = () => {
        setIsPlaying(false);
    };

    const artists = song.artist && song.artist.length > 0
        ? song.artist.map(artist => artist.name).join(', ').slice(0, 25) + (song.artist.length > 3 ? '...' : '')
        : '';

    const isCurrentSongPlaying = isPlaying && currentSongId === song._id;

    return (
        <div className="relative rounded m-1 py-2 px-3 group cursor-pointer">
            <img src={song.thumbnail} alt={song.title} className="shadow rounded " />
            <h4 className="font-medium pt-3">{song.title}</h4>
            <h5 className="font-light pt-1 text-gray-300">{artists}</h5>

            <FontAwesomeIcon
                className="top-4 right-8 absolute opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300"
                icon={faEllipsisV}
            />
            {isCurrentSongPlaying ? (
                <FontAwesomeIcon
                    className="right-6 bottom-1/3 absolute opacity-0 group-hover:opacity-100 cursor-pointer rounded-full bg-black text-white p-4 transition-opacity duration-300"
                    icon={faPause}
                    onClick={() => {
                        handlePauseClick();
                        if (audioRef.current) {
                            audioRef.current.audio.current.pause();
                        }
                    }}
                />
            ) : (
                <FontAwesomeIcon
                    className="right-6 bottom-1/3 absolute opacity-0 group-hover:opacity-100 cursor-pointer rounded-full bg-black text-white p-4 transition-opacity duration-300"
                    icon={faPlay}
                    onClick={() => {
                        handlePlayClick();
                        if (audioRef.current) {
                            audioRef.current.audio.current.play();
                        }
                    }}
                />
            )}
        </div>
    );
};

export default SongTemplate;
