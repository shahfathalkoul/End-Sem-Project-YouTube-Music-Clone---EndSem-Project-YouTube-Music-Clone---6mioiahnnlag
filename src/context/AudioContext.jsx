import { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [currentSongId, setCurrentSongId] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);

    return (
        <AudioContext.Provider value={{
            isPlaying, setIsPlaying,
            currentSong, setCurrentSong,
            currentSongId, setCurrentSongId,
            isLogin, setIsLogin,
            songs, setSongs,
            albums, setAlbums,
            artists, setArtists
        }}>
            {children}
        </AudioContext.Provider>
    );
};
