import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
import logo from './logo.svg';
import Singlepark from './components/Singlepark'

function App() {

    
  return (
    <Router>
    
      <Searchbar></Searchbar>
      <Switch>
        <Route path="/single/:id" component={Singlepark}  />
      </Switch>

    </Router>
  );
}

export default App;
