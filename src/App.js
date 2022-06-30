import { Route, Switch } from 'react-router-dom';
import Layout from './compoents/layout/Layout';
import Products from './conatiners/products/Products';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path={"/products"} exact component={Products} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
