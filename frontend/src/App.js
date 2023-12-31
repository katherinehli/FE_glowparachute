import React from "react";

import {
    Routes,
    Route
} from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import CreateModelPage from './Pages/CreateModelPage'
import Header from "./components/Header";

const App = () => (
    <div className="App" style={{height: "100%"}}>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/create" element={<CreateModelPage/>} />
        </Routes>
    </div>
);

export default App;