import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Layout from './compoents/layout/Layout';
import Products from './conatiners/products/Products';
import { configuerStore } from './redux/Store';

function App() {
  const store = configuerStore();

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route path={"/products"} exact component={Products} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
