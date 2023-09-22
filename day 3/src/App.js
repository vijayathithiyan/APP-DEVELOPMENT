import * as React from 'react';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { BrowserRouter as Router,Routes,Route} from"react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Login/>
    </div>
  );
}

export default App;
