import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// page & layout imports
import Home from './pages/home'
import ReviewDetails from './pages/reviewDetails'
import Categorie from './pages/categorie'
import SiteHeader from "./components/SiteHeader"

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
          <Route path="/categorie/:id">
            <Categorie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App