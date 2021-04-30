import React from 'react';
import useFirestore from '../../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id} >
          <img src={doc.url} alt="User Uploaded Symbol"
        
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;