import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p>{`This is the image link form`}</p>
      <div className='center'>
        <div className='form center'>
          <input className='url-form' type='text' />
          <button className='submit-button'>Hot Dog!!</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
