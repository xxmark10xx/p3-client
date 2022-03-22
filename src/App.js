import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Login from './components/pages/Login'
import Welcome from './components/pages/Welcome'
import Register from './components/pages/Register'
import Profile from './components/pages/Profile'

function App() {
  // state wi the user data when the user is logged in

  // useEffect that handles localstorage if the user navigates away fro mthe page/refreshes

  // logout handleer function that deletes a token from localstorage
  return (
    <Router>
      <Navbar />

      <div className="App">
        <Routes>
          <Route 
            path='/'
            element={<Welcome />}
          />

          <Route 
            path="/login"
            element={<Login />}
          />

          <Route 
            path="/profile"
            element={<Profile />}
          />

          <Route 
            path="/register"
            element={<Register />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
