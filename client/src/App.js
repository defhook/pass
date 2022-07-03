import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import logo from './logo.svg';
import Singlepark from './components/Singlepark'

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
    
      <Searchbar></Searchbar>
      <Switch>
        <Route path="/single/:id" component={Singlepark}  />
      </Switch>

    </Router>
      </ApolloProvider>
  );
}

export default App;
