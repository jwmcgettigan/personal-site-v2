import React from 'react';
import FlPolyLogo from '../../../../assets/FloridaPoly.svg';
import './Education.scss';

const Education = ({education}) => (
  <div id="education">
    <h1 className="title">EDUCATION</h1>
    {education.map((school, index) => (
      <p key={index}>
        <a href={school.url}>
          <img src={FlPolyLogo} alt="Florida Poly Logo"/> {school.institution + ' (Florida Poly)'}<br/>
        </a>
        <span>
          {school.area + ' | GPA: ' + school.gpa}<br/>
          {school.startDate + ' - ' + school.endDate}
        </span>
      </p>
    ))}
  </div>
)

export default Education;