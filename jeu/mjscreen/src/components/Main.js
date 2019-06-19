import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Timer from './Timer'
import Phase1 from './Phase1'

const Main = () => {
  return (
    <div id="mainScreen">
        <div className="left">
            <Phase1/>
        </div>
        <div className="right">
            <Timer/>
        </div>
    </div>
  );
};

export default Main;
