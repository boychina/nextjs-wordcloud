import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

import './index.less';

const App = () => {
  return <div className="hello">{Hello}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));