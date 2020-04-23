import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store";
import './App.scss';
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Shared/Sidebar";
import FAQ from "./Components/Pages/FAQ";
import About from './Components/Pages/About'
import Movies from "./Components/Pages/Movies";
import TVShows from "./Components/Pages/TVShows";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/tv-shows" component={TVShows}/>
                    <Route exact path="/faq" component={FAQ}/>
                    <Route exact path="/about-us" component={About}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
                <ScrollToTop />
            </div>
        </Provider>
    );
}

export default App;
