import React from 'react';

const Count = ( {name, entries, hotdogs} ) => {
  return (
    <div>
      <p>{`${name}, you've submitted ${entries} images, and ${hotdogs} of them were hot dogs`}</p>
    </div>
  );
}

export default Count;
