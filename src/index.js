import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";



function Index() {
  const element = (
    <React.StrictMode>
      <div >
          <App/>
      </div>
  </React.StrictMode>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(Index, 10000);
