/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../helper';

import pages from '../data/staticPages';
import Library from '../Components/Library';
import Gallery from '../Components/Gallery';

const Testing = ({ className }) => {
  const testingPage = pages.find(page => page.name === 'Testing');
  const theme = useTheme();

  const testingGalleryStyle = css(`
    //background: ${theme.palette.surface}; 
    //max-width: 100% !important; 
    //width: 100%; 
    //box-sizing: border-box;
  `)

  return (
    <main className={className}>
      <Gallery css={testingGalleryStyle} subpath={testingPage.subpath} pages={testingPage.subpages}/>
      <Library library={library}/>
    </main>
  );
}

export default Testing;

const library = [
  {
    name: "One",
    subcategories: [
      {
        name: 'Sub-One',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Two',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Three',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Four',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      }
    ]
  },
  {
    name: "Two",
    subcategories: [
      {
        name: 'Sub-One',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Two',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Three',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Four',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      }
    ]
  },
  {
    name: "Three",
    subcategories: [
      {
        name: 'Sub-One',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Two',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Three',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Four',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      }
    ]
  },
  {
    name: "Four",
    subcategories: [
      {
        name: 'Sub-One',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Two',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Three',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      },
      {
        name: 'Sub-Four',
        items: [
          {
            name: 'Item-One'
          },
          {
            name: 'Item-Two'
          },
          {
            name: 'Item-Three'
          },
          {
            name: 'Item-Four'
          },
        ]
      }
    ]
  }
]