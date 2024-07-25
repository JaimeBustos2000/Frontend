import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
    const images = [
        '/juegos/p0001.png',
        '/juegos/p0002.jpg',
        '/juegos/p0003.jpg',
        '/juegos/p0004.png',
        '/juegos/p0005.png',
        '/juegos/p0006.png',
        '/juegos/p0007.png',
        '/juegos/p0008.png',
        '/juegos/p0009.png',
        '/juegos/p0010.png'
    ];

    return (
        <div style={carouselContainerStyle} id='carrusel'>
            <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true} autoPlay={true}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Juego ${index + 1}`} width={50} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

const carouselContainerStyle = {
    width: '30%',
    margin: 'auto',
    Animation: 'fadeIn 2s',
};

export default ImageCarousel;
