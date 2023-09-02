import React, { useState, useEffect } from 'react';
import { ArtImages } from './Projects/ArtStationProjects';

import './NewMediaArt.scss';

function NewMediaArt() {
  const [squares, setSquares] = useState([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    window.open("https://wanyeunguin.artstation.com/", "_blank");
  };

  const images = ArtImages;

  useEffect(() => {
    const doesOverlap = (square, existingSquares) => {
      for (let existing of existingSquares) {
        if (
          square.x < existing.x + existing.size &&
          square.x + square.size > existing.x &&
          square.y < existing.y + existing.size &&
          square.y + square.size > existing.y
        ) {
          return true;
        }
      }
      return false;
    };

    const updateSquares = () => {
      const newSquares = [];
      const vw = window.innerWidth / 100;
      const vh = window.innerHeight / 100;

      while (newSquares.length < images.length) {
        const size = Math.random() * (10 * vw) + (5 * vh);  // Using viewport units
        const x = Math.random() * (window.innerWidth - (size / 1.5));
        const y = Math.random() * ((window.innerHeight / 2.2) - size + (20 * vh)) + (10); // Using viewport units
        const square = { x, y, size, url: images[newSquares.length] };
  
        if (!doesOverlap(square, newSquares)) {
          newSquares.push(square);
        }
      }
      setSquares(newSquares);
    };

    // Initialize squares
  updateSquares();

  // Add an event listener for window resizing
  window.addEventListener('resize', updateSquares);

  // Cleanup the event listener when the component is unmounted
  return () => window.removeEventListener('resize', updateSquares);

}, [images]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    setOffset({
      x: clientX / 30, // Dividing by a value to reduce the movement intensity
      y: clientY / 30,
    });
  };

  return (
    <div className="NewMediaArt" id="new-media-artist" onMouseMove={handleMouseMove}  onClick={handleClick}>
      {squares.map((square, index) => (
        <div
          key={index}
          className="square"
          style={{
            left: `${square.x + offset.x}px`,
            top: `${square.y + offset.y}px`,
            width: `${square.size}px`,
            height: `${square.size}px`,
            backgroundImage: `url(${square.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            loading: 'lazy'
          }}
        ></div>
      ))}
    </div>
  );
}

export default NewMediaArt;
