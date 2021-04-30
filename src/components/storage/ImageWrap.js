import React from 'react';
import useFirestore from '../../hooks/useFirestore';

const ImageWrap = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-wrap">
      {docs && docs.map(doc => (
        <div className="img-section" key={doc.id} >
          <img src={doc.url} alt="uploaded pic"/>
        </div>
      ))}
    </div>
  )
}

export default ImageWrap;