import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Products from './component/Products';
import NotFound from './NotFound'

function App() {

  return (
    <>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;
