import React from 'react';
import ReactDOM from 'react-dom';
import Crudapp from './Crudapp';
import './index.css';

import {BrowserRouter} from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

//import "bootstrap/dist/css/bootstrap.min.css";

// function App(){
//   return "Helllo World ................"
// }

ReactDOM.render(
  <BrowserRouter>
    <Crudapp />
  </BrowserRouter>,
  document.getElementById('root')
);

ServiceWorker.unregister();
