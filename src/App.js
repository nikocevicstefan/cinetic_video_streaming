import React from 'react';
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import './App.scss';
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Shared/Sidebar";

axios.defaults.baseURL = "http://localhost:3000";


function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
