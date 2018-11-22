//startup point foer client side application
import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowseRouter} from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(
<BrowseRouter>
<Routes/>
</BrowseRouter>, document.querySelector('#root'));

