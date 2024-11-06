import { useContext, useRef, useEffect } from 'react';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import { AudioContext } from '../context/AudioContext';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = () => {
    const { currentSong, isPlaying, setIsPlaying, setCurrentSongId } = useContext(AudioContext);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.audio.current.play();
            } else {
                audioRef.current.audio.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className="fixed bottom-0 w-full">
            {currentSong && (
                <ReactH5AudioPlayer
                    ref={audioRef}
                    src={currentSong.audio_url}
                    autoPlay={isPlaying}
                    showSkipControls={true}
                    showJumpControls={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => {
                        setIsPlaying(false);
                        setCurrentSongId(null);
                    }}
                    controls
                />
            )}
        </div>
    );
};

export default AudioPlayer;
