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
import {getLoggedInUser} from "./Helpers";
import Dashboard from "./Components/Pages/Dashboard";
import {connect} from 'react-redux';

const redirect = () => window.location.replace('/');

const App = (props) => {
    const {premium} = props;
    const [user, setUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(function fetchUser() {
        const authData = getLoggedInUser();
        if (authData) {
            setUser(authData);
            setIsAdmin(authData.user.role === 'admin');
            setIsPremium(authData.user.subscription === 'premium')
        }
    }, [premium]);


    return (
            <div className="App">
                <Sidebar
                    user={user}
                    isAdmin={isAdmin}
                    isPremium={isPremium}
                    clearAuthData={setUser}
                />
                <Wrapper>
                    <Switch>
                        <Route exact path="/" render={() => <Home user={user}/>}/>
                        <Route exact path="/movies" component={user ? Movies : redirect}/>
                        <Route exact path="/tv-shows" component={(isPremium || isAdmin) ? TVShows : redirect}/>
                        <Route exact path="/show-details" component={(isPremium || isAdmin) ? SingleTVShow : redirect}/>
                        <Route exact path="/faq" component={FAQ}/>
                        <Route exact path="/about-us" component={About}/>
                        <Route exact path="/dashboard" component={isAdmin ? Dashboard : redirect}/>
                        <Route exact path="/register" component={user ? redirect : Register}/>
                        <Route exact path="/login" component={user ? redirect : Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Wrapper>
                <ScrollToTop/>
            </div>
    );
}
const mapStateToProps =(state) => ({
    premium: state.user.premium
});
export default connect(mapStateToProps, {})(App);
