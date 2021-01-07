import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ForgotPassword from './components/user/forgotPassword'
import Add_folder from './components/user/storage/folder/add_folder'
import Add_file from './components/user/storage/file/add_file'
import Change_folder from './components/user/storage/folder/change_folder'
import Change_file from './components/user/storage/file/change_file'
import Inscription from './components/user/inscription/inscription'
import Storage from './components/user/storage/storage'
import Login from './components/user/connexion/login.js';
import Navbar from './components/navbar.js'
// import Modal from './components/modal'
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
              <Route exact path="/signup" component={Inscription} />
              <Route exact path="/storage" component={Storage} />
              <Route exact path="/addfile" component={Add_file} />
              <Route exact path="/addfolder" component={Add_folder} />
              <Route exact path="/changefile" component={Change_file} />
              <Route exact path="/changefolder" component={Change_folder} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
