import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./component/course-manager/course-manager";
import Home from "./component/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/courses" component={CourseManager}/>
              <div className="container-fluid">

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
