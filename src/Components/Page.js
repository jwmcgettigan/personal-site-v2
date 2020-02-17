import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

const Page = ({page}) => {
  const Page = page;
  return (<>
    <Navigation/>
    <Page/>
    <Footer/>
  </>)
}

export default Page;