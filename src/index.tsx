import React from 'react';
import Wordcloud from './components/Wordcloud';

const NextWordCloud = (props) => {
  return <div><Wordcloud tags={{ hello: { value: 10 } }}/></div>;
}

export default NextWordCloud;