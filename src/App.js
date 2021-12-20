import PawFinderComp from './PawFinder/PawFinderComp';
import { GlobalStyle } from './Globalstye.style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <PawFinderComp />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>
  );
}

export default App;
