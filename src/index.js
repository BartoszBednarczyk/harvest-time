import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.sass'
import { Provider } from './context/context'


ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

