import { useState } from 'react';

const ProductImages = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomStyle, setZoomStyle] = useState({});

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: 'scale(1.5)' });
    };

    const handleMouseLeave = () => {
        setZoomStyle({});
    };

    return (images &&
        <div className="product-images">
            <button className="prev" onClick={goToPrevious}>❮</button>
            <div className="image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={zoomStyle} />
            </div>
            <button className="next" onClick={goToNext}>❯</button>
        </div>
    );
};

export default ProductImages;