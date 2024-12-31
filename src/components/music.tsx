import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const musics = [
    {
        name: "Bruno Mars - Just the way you are",
        src: "/music/just-the-way-you-are.mp3",
    },
    {
        name: "Freeman - Байландым",
        src: "/music/bailandym.mp3",
    },
    {
        name: "Imagine Dragons - Wrecked",
        src: "/music/wrecked.mp3",
    },
    {
        nama: "Freeman - Жармашып",
        src: "/music/jarmashyp.mp3",
    },
    {
        name: "Sting - Shape of my heart",
        src: "/music/shape-of-my-heart.mp3",
    },
];

export const MusicPlayer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? musics.length - 1 : prevIndex - 1));
    };

    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === musics.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <p style={{fontSize: "20px", color: "white", textAlign: "center", position: "relative", zIndex: 1000}}>
                {musics[currentIndex].name}
            </p>
            <div style={{position: "relative", zIndex: 9999}}>

                <AudioPlayer
                    style={{
                        background: "none",
                        color: "white",
                    }}
                    autoPlay
                    src={musics[currentIndex].src}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    showSkipControls
                    showJumpControls={false}
                />

            </div>
        </>
    );
};
