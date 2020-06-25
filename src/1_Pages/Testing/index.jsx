/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming';
import { Library, Gallery } from '../../2_Components';
import { pages } from '../../3_Data';
import { bp, mq, zDepth } from '../../4_Utilities';
//import { pages } from './pages';

const Testing = ({ className }) => {
  const testingPage = pages.find(page => page.name === 'Testing');
  const theme = useTheme();

  const testingGalleryStyle = css(`
    //background: ${theme.palette.surface}; 
    //max-width: 100% !important; 
    //width: 100%; 
    //box-sizing: border-box;
    padding-top: 3rem;
  `)

  return (
    <main className={className}>
      <Gallery css={testingGalleryStyle} subpath={testingPage.subpath} pages={testingPage.subpages}/>
      <Library library={library}/>
    </main>
  );
}

export default Testing;


export {default as Article} from './Article';
export {default as Games} from './Games';
export {default as LinkLibrary} from './LinkLibrary';
export {default as PageBuilder} from './PageBuilder';
export {default as Learning} from './Learning';
export {default as Art} from './Art';
export {default as ControlPanel} from './ControlPanel';

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