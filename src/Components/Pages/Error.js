import React from 'react';
 
import Navigation from '../Navigation';
import Footer from '../Footer';
import './Error.scss';

const Error = () => (<>
  <Navigation/>
  <main id="error">
    <h1>404: Page does not exist!</h1>
  </main>
  <Footer/>
</>)
 
export default Error;