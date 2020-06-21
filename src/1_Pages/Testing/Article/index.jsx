/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { bp, mq, zDepth } from '../../../4_Utilities';

import './Article.scss';
import { Button } from '../../../2_Components';

const articleExample = {
  title: "Data Structures",
  description: "A data structure is a particular way of organizing data in a computer so that it can be used effectively.",
  author: "",
  date: "3-3-2020",
  sections: [
    {
      title: "Primitive Data Types",
      description: "Single values with no special capabilities.",
      subsections: [
        {
          title: "Boolean",
          description: "Logical Value"
        },
        {
          title: "Character",
          description: "Single Character"
        },
        {
          title: "Floating-Point",
          description: "Real Number"
        },
        {
          title: "Integer",
          description: "Whole Number"
        }
      ]
    },
    {
      title: "Composite Data Types",
      description: "",
      subsections: [
        {
          title: "Array",
          description: "String"
        },
        {
          title: "Record",
          description: ""
        },
        {
          title: "Union",
          description: ""
        }
      ]
    },
    {
      title: "Abstract Data Types",
      description: "",
      subsections: [
        {
          title: "Container",
          description: ""
        },
        {
          title: "List",
          description: ""
        },
        {
          title: "Tuple",
          description: ""
        },
        {
          title: "Set",
          description: ""
        },
        {
          title: "Stack",
          description: ""
        },
        {
          title: "Queue",
          description: ""
        },
        {
          title: "Graph",
          description: "Tree, Heap"
        }
      ]
    }
  ],
  references: [
    "https://www.geeksforgeeks.org/data-structures/",
    "https://en.wikipedia.org/wiki/List_of_data_structures"
  ]
}

const TableOfContents = ({ articleExample }) => (
  <div className="table-of-contents">
    {articleExample.sections.map((section, i) => (
      <Button key={i} text={section.title} url={"#" + section.title} newtab={false}/>
    ))}
  </div>
)

const Status = () => (
  <div className="status">
    <span>Published 2 days ago</span>
    <span>5 min read</span>
    <span>4 comments</span>
  </div>
)

const Section = ({ section }) => {
  return (
    <div className="article-section">
      <h3 id={section.title}>{section.title}</h3>
      <p>{section.description}</p>
      <div className="article-content">
        {(section.subsections && section.subsections.length) ? 
          section.subsections.map((subsec, i) => (
            <div className="article-sub-section">
              <h4>{subsec.title}</h4>
          <p>{subsec.description}</p>
            </div>
          )) : ''
        }
      </div>
      {/*<p>{section.body}</p>*/}
      {/*<img src={require()}></img>*/}
    </div>
  )
}

const Article = ({ className }) => (
  <main id="article" className={className}>
    <article>
      <h2>{articleExample.title}</h2>
      <Status/>
      <TableOfContents articleExample={articleExample}/>
      <p>{articleExample.description}</p>
      {/*<figure><img/></figure>*/}
      {(articleExample.sections && articleExample.sections.length) ? 
        articleExample.sections.map((section, i) => (
          <Section key={i} section={section}/>
        )) : ''
      }
    </article>
  </main>
)

export default Article;