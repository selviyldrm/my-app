import React from 'react';
import { Container } from 'reactstrap';
import { Route,Switch } from 'react-router-dom';
import Navi from "../navi/Navi"
import Dashboard from './Dashboard';
import CartDetail from "../cart/CartDetail"
import AddOrUpdateProduct from '../products/AddOrUpdateProduct.js';
import NotFound from "../common/NotFound.js"

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
        <Route  path="/" exact component={Dashboard} />
        <Route  path="/product" exact component={Dashboard} />
        <Route  path="/cart" exact component={CartDetail} />
        <Route path="/saveproduct"  component={AddOrUpdateProduct}/>
        <Route path="/saveproduct/:productId"  component={AddOrUpdateProduct}/>
        <Route  component={NotFound} />
      </Switch>
      </Container>
    </div>
  );
}

export default App;
