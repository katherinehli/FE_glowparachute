import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';



function withNavigation(Component) {
  return props => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

const Main = () => {
  return (
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
      </Routes>
  );
};

class App extends Component {

  render() {
    return (
        <div className="App">
          <Main />
        </div>
    );
  }
}

export default withNavigation(App);