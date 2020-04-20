import React from 'react';
import MainHeader from "./MainHeader";
import ContentShowcase from "./ContentShowcase";
import ShowcaseImageMovie from '../../../assets/img/movie10.jpg';
import ShowcaseImageShow from '../../../assets/img/tvshow6.jpg';

const Home = () => {
    return (
        <div className="homepage">
            <MainHeader />
            <ContentShowcase image={ShowcaseImageMovie}  heading="Movies" text="lorem ispum dolor sit amet" link="/movies"/>
            <ContentShowcase image={ShowcaseImageShow} heading="TV Shows" text="lorem ispum dolor sit amet" classes="content-showcase--reverse" link="/tv-shows"/>
        </div>
    );
};


export default Home;
