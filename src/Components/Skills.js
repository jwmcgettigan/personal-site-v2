import React from 'react';

const Skills = ({skills}) => (
  <section id="skills">
    <h1>SKILLS</h1>
    {skills.map((category, index) => (
      <p key={index}>{category.name + ': '}<span>{category.keywords.map((skill, index) => (index ? ', ' : '') + skill)}</span></p>
    ))}
  </section>
)

export default Skills;