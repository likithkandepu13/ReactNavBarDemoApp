// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter } from "react-router-dom"; //BrowserRouter, you define your application's routes using the Route component provided by React Router. Each Route component specifies a path and the component to render when the URL matches that path.
import NavBar from "./routingdemo/NavBar";

function App() {
  return (
    <div className="App">
      <h2 align="center">Online Job Portal</h2>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      
    </div>
  );
}

export default App;