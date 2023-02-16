import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h2>Technologies Used</h2>
      <div>
        <ul>
          <li>Node</li>
          <li>Axios</li>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Postgress</li>
          <li>SQL</li>
          <li>Body-Parser</li>
          <li>MUI</li>
        </ul>
      <h3>Thanks to!</h3>
        <p>My family and friends for their support throughout the program.</p>
        <p>The Vonnegut cohort for their help and general awesomeness.</p>
        <p>Matt, Dane, Kris, Vada, for sharing their knowledge and wisdom to help bring this app to life!</p>
      </div>
    </div>
  );
}

export default AboutPage;
