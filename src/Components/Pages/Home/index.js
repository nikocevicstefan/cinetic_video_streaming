import React from 'react';
import MainHeader from "./MainHeader";
import ContentShowcase from "./ContentShowcase";
import ShowcaseImageMovie from '../../../assets/img/movie10.jpg';
import ShowcaseImageShow from '../../../assets/img/tvshow6.jpg';

const Home = () => {
    const tvhShowText = "These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.";
    const moviesText = "Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.";
    return (
        <div className="homepage">
            <MainHeader />
            <ContentShowcase image={ShowcaseImageMovie}  heading="Movies" text={moviesText} link="/movies"/>
            <ContentShowcase image={ShowcaseImageShow} heading="TV Shows" text={tvhShowText} link="/tv-shows" classes="content-showcase--reverse"/>
        </div>
    );
};


export default Home;
