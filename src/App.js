import './App.scss'; 
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';


function App() {
  return (<>
    <div className="App">
      
        
        <h1> Hello world </h1>
        <Home/>
        <Login/>
        <Register/>
        
      
    </div>
    </>
  );
}

export default App;
