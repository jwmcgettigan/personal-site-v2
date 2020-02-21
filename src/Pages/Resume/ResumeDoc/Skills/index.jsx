import React from 'react';
import './Skills.scss';

const Skills = ({skills}) => (
  <div id="skills">
    <h1 className="title">SKILLS</h1>
    {skills.map((category, index) => (
      <p key={index}>{category.name + ': '}<span>{category.keywords.map((skill, index) => (index ? ', ' : '') + skill)}</span></p>
    ))}
  </div>
)

export default Skills;