/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CardsPage from './pages/Cards';
import JokesApp from './pages/Jokes';
import Meal from './pages/Meal';
import IncomeCalcPage from './pages/IncomeCalc';
import ContactPage from './pages/Contact';


interface P {

}

const App: React.FC<P> = () => (
  <>

    <Layout>
      <Helmet>
        <meta name="Masius App" content="React Apps" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cards" component={CardsPage} />
          <Route exact path="/jokes" component={JokesApp} />
          <Route exact path="/meals" component={Meal} />
          <Route exact path="/income-calc" component={IncomeCalcPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Helmet>

    </Layout>
  </>
);


export default App;
