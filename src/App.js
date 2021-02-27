import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DASHBOARD, HOME, NOT_FOUND } from './constants/routes';
import './App.css';
// import Error from './components/Error';
// import Home from './components/Home';
// import Dashboard from './container/Dashboard';
import Spinner from './utils/Spinner';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const Dashboard = lazy(() => import('./container/Dashboard'));
const Error = lazy(() => import('./components/Error'));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={HOME}>
            <Suspense fallback={Spinner()}>
              <Home />
            </Suspense>
          </Route>
          <Route path={DASHBOARD}>
            <Suspense fallback={Spinner()}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route path={NOT_FOUND}>
            <Suspense fallback={Spinner()}>
              <Error />
            </Suspense>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
