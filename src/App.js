import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component';
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
