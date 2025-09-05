import React, { useState, useEffect } from 'react';
import { SVGS } from '../../../data.js'; // Ensure this path is correct

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SVGS.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + SVGS.length) % SVGS.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="image-gallery">
            <div className="gallery-container">
                <button className="gallery-button left" onClick={prevImage}>&#9664;</button>
                <div className="image-wrapper">
                    <img 
                        src={SVGS[currentIndex].image} 
                        alt={SVGS[currentIndex].title} 
                        className="gallery-image" 
                    />
                </div>
                <button className="gallery-button right" onClick={nextImage}>&#9654;</button>
            </div>
            <h3>{SVGS[currentIndex].title}</h3>
            <p className='description'>{SVGS[currentIndex].description}</p>
        </div>
    );
};

export default ImageGallery;
