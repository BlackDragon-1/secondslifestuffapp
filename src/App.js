import react from 'react'
import Home from './components/pages/home/home';
import Zaloguj from './components/pages/zaloguj/zaloguj';
import Rejestracja from './components/pages/rejestracja/rejestracja';
import HomeLoggedIn from './components/pages/home_logged_in/home_logged_in';
import Wylogowano from './components/pages/wylogowano/wylogowano';



import {Route, 
  BrowserRouter,
  HashRouter,
  Link,
  Switch,
  NavLink} from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/' component={HomeLoggedIn}/>
            <Route path='/Zaloguj/' component={Zaloguj}/>
            <Route path='/rejestracja/' component={Rejestracja}/> 
            <Route path='/wylogowano/' component={Wylogowano}/> 
          </Switch>     
        </>
      </BrowserRouter>    
  );
}

export default App;
