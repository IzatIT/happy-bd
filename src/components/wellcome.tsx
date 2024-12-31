import {AppParticles} from "./particles.tsx";
import { v4 as uuidv4 } from 'uuid';
import {AppCarousel} from "./cariousel/carousel.tsx";
import 'react-h5-audio-player/lib/styles.css';
import "./wellcome.css"
import {MusicPlayer} from "./music.tsx";

const slides = [
    {
        key: uuidv4(),
        content: <img src="/albina/2.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/1.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/3.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/4.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/5.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/6.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/7.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/8.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/9.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/10.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/11.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img src="/albina/12.png" alt="1" />
    },

];

export const Wellcome = () => {
    return (
        <div style={{maxWidth: "90%", margin: "0 auto"}}>
            <div style={{position: 'relative', zIndex: 1}}>
                <AppParticles/>
            </div>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '50px 20px' }}>
                <h1 className="wellcom_title">
                    С Днём Рождения Aльбина!
                </h1>
                <p className="wellcome_text">
                    Пусть этот год станет для тебя началом самых ярких и волшебных моментов! Пусть каждый день приносит радость и вдохновение, каждое утро начинается с улыбки, а вечер завершает чувство гармонии. Пусть рядом будут верные друзья, теплота близких и любовь, согревающая сердце. Желаю, чтобы каждая твоя мечта находила дорогу к исполнению, а жизнь была наполнена бесконечным счастьем, новыми открытиями и чудесами, которые случаются, когда меньше всего их ожидаешь. Альбина, пусть этот год будет твоим лучшим!
                </p>
            </div>
            <div style={{position: 'relative', zIndex: 9999 }}>
                <AppCarousel
                    cards={slides}
                    height="500px"
                    width="10%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                />
            </div>
            <MusicPlayer/>
        </div>
    );
};

