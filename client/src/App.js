import FirstPage from './components/firstpage/firstPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/login/login';
import SignUp from './components/signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage}></Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
