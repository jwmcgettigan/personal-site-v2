import React from 'react';

const Experience = ({experience}) => (
  <section id="experience">
    <h1>EXPERIENCE</h1>
    {experience.map((place, index) => (
      <article key={index}>
        <h4>
          <b>{place.position}</b><span>{place.company}</span> 
          <i>{place.startDate + ' - ' + place.endDate}</i>
        </h4>
        <ul>
          {place.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
        </ul>
      </article>
    ))}
  </section>
)

export default Experience;