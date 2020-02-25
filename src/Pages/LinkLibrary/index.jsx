import React from 'react';
import './LinkLibrary.scss';
import links from '../../data/links';

const LinkLibrary = () => (
  <main id="link-library">
    <div className="library section">
      {links.library.map((category, i) => (
        <div className="category" key={i}>
          <h3 className="title">{category.name}</h3>
          <div className="subcategories">
            {category.subcategories.map((subcategory, i) =>
              <div className="subcategory" key={i}>
                <h4>{subcategory.name}</h4>
                <div className="links">
                  {subcategory.links.map((app, i) => 
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

export default LinkLibrary;