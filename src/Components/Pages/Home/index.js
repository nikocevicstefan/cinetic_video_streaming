import React from 'react';
import MainHeader from "./MainHeader";
import ContentShowcase from "./ContentShowcase";
import ShowcaseImageMovie from 'assets/img/movie10.jpg';
import ShowcaseImageShow from 'assets/img/tvshow6.jpg';
import {useToggle} from "../../../Hooks";
import Modal from "../../Shared/Modal";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({user}) => {

    const [modal, toggleModal] = useToggle();

    const tvhShowText = "These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.";
    const moviesText = "Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.";
    return (
        <div className="homepage">
            <MainHeader user={user}/>
            <ContentShowcase image={ShowcaseImageMovie} heading="Movies" text={moviesText} link={user ? `/movies` : `/register`}/>
            <ContentShowcase image={ShowcaseImageShow} heading="TV Shows" text={tvhShowText} link={user ? `/tv-shows` : `/register`}
                             classes="content-showcase content-showcase--reverse" onclick={toggleModal}/>
            <Modal show={modal} handleClose={toggleModal} user={user}/>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};


export default Home;
