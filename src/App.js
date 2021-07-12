import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Welcome from './components/Welcome';
// import Table from './components/Table';
import CardGallery from './components/CardGallery';
import TeamDetail from './components/TeamDetail';
import Favourites from './components/Favourites';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Welcome/>
          {/* <Table/> */}
          <Switch>
            <Route exact path="/">
              <CardGallery/>
            </Route>
            <Route path="/teams/:teamId">
              <TeamDetail/>
            </Route>
            <Route path="/favourites">
              <Favourites/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
