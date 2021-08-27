import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>{`This is the image link form`}</p>
      <div className='center'>
        <div className='form center'>
          <input className='url-form' type='text' onChange={onInputChange}/>
          <button className='submit-button' onClick={onButtonSubmit}>Hot Dog!!</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
