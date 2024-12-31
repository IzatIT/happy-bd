import Carousel from "react-spring-3d-carousel";
import {useState, useEffect, ReactElement} from "react";
import { config } from "react-spring";
import "./carousel.css"

type Props = {
    cards: { key: string; content: ReactElement; }[];
    height: string;
    width: string;
    margin: string;
    offset: number;
    showArrows: boolean
}

export function AppCarousel(props: Props) {
    const table = props.cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div className="carousel">
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}
