import React from 'react';

const Interests = ({interests}) => (
  <section id="interests">
    <h1>INTERESTS</h1>
    <p>{interests.map((interest, index) => (index ? ', ' : '') + interest)}</p>
  </section>
)

export default Interests;