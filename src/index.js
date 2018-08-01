import ReactDOM from 'react-dom';
import App from './components/App';
import React from 'react';
import { Provider } from 'mobx-react';
import ImageStore from './store/ImageStore';

const app =
    <Provider imageStore={ImageStore}>
        <App />
    </Provider>;

ReactDOM.render(app, document.getElementById("root"));