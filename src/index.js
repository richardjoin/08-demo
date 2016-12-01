import React from 'react';
import {render} from 'react-dom';

import Routers from './routes';
import './main.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import One from './One';

render(<Routers />,document.getElementById('root'));
