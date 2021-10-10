import '../src/App.css'
import NavBar from './componenets/NavBar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from "./pages/TvShows";
import NewAndPopular from "./pages/NewandPopular"




function App() {
  return (

    <div>
      <Router>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/latest">
            <NewAndPopular />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
