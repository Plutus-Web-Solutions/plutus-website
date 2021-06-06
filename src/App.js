import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>       
        <Route path='/' exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
