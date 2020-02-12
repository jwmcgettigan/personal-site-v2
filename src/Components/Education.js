import React from 'react';
import FlPolyLogo from '../assets/flpolylogo.svg'

const Education = ({education}) => (
  <section id="education">
    <h1>EDUCATION</h1>
    {education.map((school, index) => (
      <p key={index}>
        <img src={FlPolyLogo} alt="Florida Poly Logo"/> {school.institution + ' (Florida Poly)'}<br/>
        <span>
          {school.area + ' | GPA: ' + school.gpa}<br/>
          {school.startDate + ' - ' + school.endDate}
        </span>
      </p>
    ))}
  </section>
)

export default Education;