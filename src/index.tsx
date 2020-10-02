import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Root } from './router/Root';



const Index = (): JSX.Element => {
  return (
    <React.StrictMode>
            <Router>
              <Root />
            </Router>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
