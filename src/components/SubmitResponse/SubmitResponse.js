import React from 'react';
import notHotDog from './nothotdog.jpg';
import hotDog from './hotdog.jpg';
import './SubmitResponse.css';

const SubmitResponse = ({ apiResponse }) => {
  const createAttributesObj = () => {
    if (apiResponse === 'hotdog') {
      return {
        img: hotDog,
        alt: 'hot dog',
        h1: 'hot-dog',
        text: 'Hotdog!'
      }
    } else if (apiResponse === 'nothotdog') {
      return {
        img: notHotDog,
        alt: 'not hot dog',
        h1: 'not-hot-dog',
        text: 'Not hotdog!'
      }
    } else {
      return {
        img: '',
        alt: '',
        h1: '',
        text: ''
      }
    }
  }
const attributesObj = createAttributesObj()

  return (
    <div>
      <img alt={apiResponse} src={attributesObj.img}/>
      <h1 className= {`submit-response ${attributesObj.h1}`}>{attributesObj.text}</h1>
    </div>
  );
}

export default SubmitResponse;
