import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Lightbox from './lightbox/components/lightbox-main';

ReactDOM.render(
  <React.StrictMode>
    {/* Core call to the Lightbox component */}
    <Lightbox/>
  </React.StrictMode>,
  document.getElementById('root')
);
