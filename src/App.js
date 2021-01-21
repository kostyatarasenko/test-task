import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import List from './components/List';
import './styles/index.css';

const App = () => {
    return (
        <Provider store={store}>
            <List />
        </Provider>
    );
};

export default App;
