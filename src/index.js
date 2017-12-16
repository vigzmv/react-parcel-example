import React from 'react';
import ReactDOM from 'react-dom';

import ExampleApp from './ExampleApp';

ReactDOM.render(<ExampleApp />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
