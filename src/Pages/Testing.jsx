/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTheme } from '@material-ui/core/styles';
import { bp, mq, zDepth } from '../helper';

import Library from '../Components/Library';

const Testing = ({ className }) => {
  
  return (
    <main className={className}>
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