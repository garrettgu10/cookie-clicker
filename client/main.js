import React from 'react';
import {render} from 'react-dom';
import App from '../imports/App.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

Meteor.startup(function() {
  render(<App />, document.getElementById('render-target'));
})
