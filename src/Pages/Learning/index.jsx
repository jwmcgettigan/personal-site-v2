import React from 'react';
import './Learning.scss';
import learning from '../../data/learning';


//! Have the more detailed/technical skills be on
//! my website while having more overarching (high level) skills
//! be on my resume | only include technical skills that are
//! relevent to the target job on my resume (same with projects)
//? skills, algorithms, techniques, and methods
const Learning = ({basics}) => (
  <main id="learning-library">
    <div className="library section">
      {learning.library.map((category, i) => (
        <div className="category" key={i}>
          <h3 className="title">{category.name}</h3>
          <div className="subcategories">
            {category.subcategories.map((subcategory, i) =>
              <div className="subcategory" key={i}>
                <h4>{subcategory.name}</h4>
                <div className="subjects">
                  {subcategory.subjects.map((app, i) => 
                    <a href={app.url} key={i}>{app.name}</a>)}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </main>
)

export default Learning;