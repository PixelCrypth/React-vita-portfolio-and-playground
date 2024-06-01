import React, { useState } from 'react';

function ApiTesting() {
  const [imageUrl, setImageUrl] = useState('');

  const handleClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.log(error));
  };
  //  TODO: Get rid of the styles and set them in App.css
  return (
    <div style={{ display: 'flex' }}>
      <div className='About-me-div'>
        <h2>Explore the Dog API</h2>
        <p>This component allows you to interact with the Dog API.</p>
        <p>The Dog API offers a collection of random dog pictures.</p>
        <p>It's an excellent resource for testing API requests.</p>
        <p>API Endpoint: https://dog.ceo/api/breeds/image/random</p>
        <p>Click the button below to start exploring:</p>
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className='About-me-div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', maxWidth: '500px', minWidth: '500px', maxHeight: '500px', minHeight: '500px' }}>
        {imageUrl && <img src={imageUrl} alt="Random Dog" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
      </div>
    </div>
  );
}

export default ApiTesting;
