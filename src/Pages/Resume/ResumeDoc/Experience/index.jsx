import React from 'react';
import './Experience.scss';

const Experience = ({experience}) => (
  <div id="experience">
    <h1 className="title">EXPERIENCE</h1>
    {experience.map((place, index) => (
      <div key={index}>
        <h4>
          <b>{place.position}</b><span>{place.company}</span> 
          <i>{place.startDate + ' - ' + place.endDate}</i>
        </h4>
        <ul>
          {place.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
        </ul>
      </div>
    ))}
  </div>
)

export default Experience;