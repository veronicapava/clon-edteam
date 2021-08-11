import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/styles.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import { getAllSpecialities } from './redux/actionCreator';


store.dispatch(getAllSpecialities())




ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

