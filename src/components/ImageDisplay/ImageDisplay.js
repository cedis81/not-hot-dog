import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = ( {imageUrl} ) => {
  return (
    <div className='photo-div'>
      <img className='photo' src={imageUrl} alt='' />
    </div>
  );
}

export default ImageDisplay;
