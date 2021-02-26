import React from 'react';
import errorImg from '../assets/images/searching.svg';
import '../assets/css/Error.css';

function Error() {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-img"><img src={errorImg} alt="error" /></div>
        <h1>404</h1>
        <p>sorry, the page you are looking for cannot be found</p>
      </div>
    </div>

  );
}

export default Error;
