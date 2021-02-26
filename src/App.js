import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import { DASHBOARD, HOME, NOT_FOUND } from './constants/routes';
import Dashboard from './container/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <Route path={DASHBOARD}>
            <Dashboard />
          </Route>
          <Route path={NOT_FOUND}>
            <Error />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
