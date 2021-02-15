import './App.scss'; 
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';


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
