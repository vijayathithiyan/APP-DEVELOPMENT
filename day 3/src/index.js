import React from 'react';
import ReactDOM from 'react-dom/client';
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';  




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          <Route exact path='/' element={< Signup />}></Route>  
          <Route exact path='/login' element={< Login />}></Route>  
        </Routes>
     
    </Router>
  </React.StrictMode>
);