import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForgotPassword from './components/user/forgotPassword'
import fichier from './components/'
import Inscription from './components/user/inscription/inscription'
import Storage from './components/user/storage/storage'
import Login from './components/user/connexion/login.js';
import Navbar from './components/navbar.js'
import Modal from './components/modal'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
