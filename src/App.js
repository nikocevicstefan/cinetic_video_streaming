import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./store";
import './App.scss';
import Home from "./Components/Pages/Home";
import Sidebar from "./Components/Shared/Sidebar";
import Movies from "./Components/Pages/Movies";
import TVShows from "./Components/Pages/TVShows";
import ScrollToTop from "./Components/Shared/ScrollToTop";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Sidebar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" component={Movies}/>
                    <Route exact path="/tv-shows" component={TVShows}/>
                </Switch>
                <ScrollToTop />
            </div>
        </Provider>
    );
}

export default App;
