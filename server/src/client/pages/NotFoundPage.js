import React from 'react';

//staticContext is renamed context-prop from staticRouter
const NotFoundPage = ({ staticContext }) => {
  staticContext.notFound = true;

  return <div style={{fontSize: '3em', textAlign: 'center'}}>
      <h2>Page not found <span>🤨</span></h2> 
  </div>
}

export default {
  component: NotFoundPage
}