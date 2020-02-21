import React from 'react';
import './Interests.scss';

const Interests = ({interests}) => (
  <div id="interests">
    <h1 className="title">INTERESTS</h1>
    <p>{interests.map((interest, index) => <span key={index}>{(index ? ', ' : '')}<span className="interest">{interest}</span></span>)}</p>
  </div>
)

export default Interests;