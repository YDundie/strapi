import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

// page & layout imports
import Home from './pages/home'
import ReviewDetails from './pages/reviewDetails'
import Categorie from './pages/categorie'
import SiteHeader from "./components/SiteHeader"

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}

export default App