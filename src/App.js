import React from 'react';
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import './App.scss';
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Shared/Sidebar";
import VideoContent from "./Components/Pages/VideoContent";

axios.defaults.baseURL = "http://localhost:3000";


function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/movies" component={VideoContent}/>
            </Switch>
        </div>
    );
}

export default App;
