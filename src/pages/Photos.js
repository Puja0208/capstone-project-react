import React from 'react';

import Image from '../components/Image';
import { getClass } from '../utils';

function Photos() {
  // Get the allPhotos array from context
  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

  return (
    <main className="photos">
      <h1>Images go here</h1>
    </main>
  );
}

export default Photos;
