import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./component/home"
function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true} component={Home}></Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
