import React, { Fragment } from 'react';
import './App.css';

import github from './icons/github.svg';

import ImageTextReader from './components/ImageTextReader'

function App() {
  return (
    <Fragment>
      <a target="_blank" href="https://github.com/manvendra22/watson-visual-recognition" className="git-link">
        <img src={github} alt="github-logo" className="icon-git" />
      </a>
      <div className="app">
        <ImageTextReader />
      </div>
    </Fragment>
  );
}

export default App;
