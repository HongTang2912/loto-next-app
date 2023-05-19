import React from 'react'
import NumberFloating from '../components/Animations/animate'
import { blobs } from "../utils/configuration/blobs";

export default function animate() {
  return (
    <div>
      <NumberFloating
        number="H"
        mainColor="#fad"
        blobStyle={blobs[0]}
      />
    </div>
  );
}
