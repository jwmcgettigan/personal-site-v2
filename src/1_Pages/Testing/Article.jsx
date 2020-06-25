/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Button } from '../../2_Components';
import { bp, mq, zDepth } from '../../4_Utilities';

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

const TableOfContents = ({ articleExample, className }) => {
  const tocStyle = theme => css(`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    //margin: -0.3rem;
    //! background: lighten(color(background), 5%);
    padding: 0.3rem;
    margin-bottom: 1rem;
    
    a {
      width: min-content;
      white-space: nowrap;
      margin: 0.3rem;
      flex: 1 1 auto;
      justify-content: center;
      background: color(surface, light);
    }
  `)

  return (
    <div css={tocStyle} className={className}>
      {articleExample.sections.map((section, i) => (
        <Button key={i} text={section.title} url={"#" + section.title} newtab={false}/>
      ))}
    </div>
  )
}

const Status = ({ className }) => {
  const statusStyle = css(`
    margin-bottom: 1rem;

    span {
      //! color: color(background, on, 0.4);
    } span:after {
      content: "";
      display: inline-block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      //! background: #8f8f8f;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      position: relative;
      top: -3px;
    } span:last-child:after {
      display: none;
    }
  `)

  return (
    <div css={statusStyle} className={className}>
      <span>Published 2 days ago</span>
      <span>5 min read</span>
      <span>4 comments</span>
    </div>
  )
}

const ArticleSection = ({ section, className }) => {
  const articleSectionStyle = css(`
    margin-top: 3rem;
    padding: 1rem;
    //! background: lighten(color(background), 5%);

    .article-content {
      display: flex;
      flex-wrap: wrap;
      margin: -0.5rem;

      .article-sub-section {
        //! background: lighten(color(background), 10%);
        margin: 0.5rem;
        padding: 1rem;
        border-radius: 3px;
        flex: 1 1 auto;
        min-width: 10rem;

        h4 {
          //! color: color(background, on, 0.95);
          font-size: 1.5rem;
        }
      }
    }
  `)

  return (
    <div css={articleSectionStyle} className={className}>
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

const Article = ({ className }) => {
  const articleStyle = css(`
    padding: 1rem;
    justify-content: center;
    max-width: 820px;
    //background: lighten(color(background), 2%);
    //border: 1px solid lighten(color(background), 5%);

    ${mq('tablet-wide')} {
      padding: 3rem;
    }
    h2 {
      font-size: 2rem;
      //! color: color(background, on, 0.95);
    } h3 {
      font-size: 1.75rem;
      //! color: color(background, on, 0.95);
      margin: 0 0 1rem 0;
    }
    p {
      margin-bottom: 1rem;
    }
  `)
  
  return (
    <main className={className}>
      <article css={articleStyle}>
        <h2>{articleExample.title}</h2>
        <Status/>
        <TableOfContents articleExample={articleExample}/>
        <p>{articleExample.description}</p>
        {/*<figure><img/></figure>*/}
        {(articleExample.sections && articleExample.sections.length) ? 
          articleExample.sections.map((section, i) => (
            <ArticleSection key={i} section={section}/>
          )) : ''
        }
      </article>
    </main>
  )
}

export default Article;