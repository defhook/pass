import react from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Singlepark from './components/Singlepark'
import Favorites from "./pages/favorites";
import User from "./pages/user";
import HomePage from "./pages/home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Something ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {


  return (

    <ApolloProvider client={client}>

    <Router>
    
      <Navigation></Navigation>
      <Switch>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/favorites" component={Favorites} />
       <Route exact path="/user" component={User} />
       <Route exact path="/About" component={About} />
       <Route path="/single/:id" component={Singlepark}  />
      </Switch>
    <Footer></Footer>
    </Router>

    </ApolloProvider>
  );
}

export default App;
