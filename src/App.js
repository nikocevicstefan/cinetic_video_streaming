import React, {useEffect, useState} from 'react';
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
import NotFound from "./Components/Pages/NotFound";
import Wrapper from "Components/Pages/Wrapper";
import SingleTVShow from "./Components/Pages/SingleTVShow";

const redirect = () => window.location.replace('/');

const App = () => {

    const [user, setUser] = useState(true);

    useEffect(function fetchUser() {
        const loggedInUser = window.localStorage.getItem('loggedInUser');
        //setUser(JSON.parse(loggedInUser));
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/movies" component={user ? Movies : redirect}/>
                        <Route exact path="/tv-shows" component={user ? TVShows : redirect}/>
                        <Route exact path="/show-details" component={user ? SingleTVShow : redirect}/>
                        <Route exact path="/faq" component={FAQ}/>
                        <Route exact path="/about-us" component={About}/>
                        <Route exact path="/register" component={user ? redirect : Register}/>
                        <Route exact path="/login" component={user ? redirect : Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Wrapper>
                <ScrollToTop/>
            </div>
        </Provider>
    );
}

export default App;
