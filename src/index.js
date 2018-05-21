import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import App from './App';
import Home from './Home';
import Stock from './Stock';
import StockIn from './StockIn';
import StockOut from './StockOut';

ReactDOM.render((<HashRouter>
  <App>
    <Route path="/" component={Home} exact/>
    <Route path="/home" component={Home}/>
    <Route path="/Stock" component={Stock}/>
    <Route path="/StockIn" component={StockIn}/>
    <Route path="/StockOut" component={StockOut}/>
  </App>
</HashRouter>), document.getElementById('root'));