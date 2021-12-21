import React, { useContext } from 'react';

import Image from '../components/Image';
import { getClass } from '../utils';

import { Context } from '../Context';

function Photos() {
  // Get the allPhotos array from context
  // map over it, creating <Image /> elements of the component we just made
  // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => {
    <Image key={img.id} img={img} className={getClass(i)} />;
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
