import React from 'react';

const Interests = ({interests}) => (
  <section id="interests">
    <h1>INTERESTS</h1>
    <p>{interests.map((interest, index) => <span key={index}>{(index ? ', ' : '')}<span className="interest">{interest}</span></span>)}</p>
  </section>
)

export default Interests;