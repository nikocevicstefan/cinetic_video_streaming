import React from 'react';
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import {Provider} from 'react-redux';
import store from "./store";
import './App.scss';
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Shared/Sidebar";
import VideoContent from "./Components/Pages/VideoContent";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" component={VideoContent}/>
                </Switch>
            </div>
        </Provider>
    );
}

export default App;
