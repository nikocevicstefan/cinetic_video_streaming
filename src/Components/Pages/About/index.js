import React from 'react';
import Map from 'assets/img/map.png';
import aboutImage from 'assets/img/illustrations/undraw_video_streaming_yyld.svg'

const About = () => {
    return (
        <div className="about-us">
            <div className="about-us__main">
                <div className="about-us__text">
                    <h1 className="about-us__heading">About Us</h1>
                    <p className="about-us__details">Cinetic is a streaming service that offers a wide variety of
                        award-winning TV shows, movies, anime, documentaries, and more on thousands of
                        internet-connected
                        devices.
                    </p>
                    <p className="about-us__details">You can watch as much as you want, whenever you want without a
                        single
                        commercial – all for one low monthly price. There's always something new to discover and new TV
                        shows and movies are added every week!
                    </p>
                </div>
                <div className="about-us__image">
                    <img src={aboutImage} alt="about us cover image"/>
                </div>
            </div>
            <div className="about-us__contact">
                <div className="about-us__contact-info">
                    <h2 className="about-us__subheading">Contact us</h2>
                    <ul>
                        <li> <strong> Phone: </strong> 069602930</li>
                        <li> <strong> Email: </strong> nikocevicstefan@gmail.com</li>
                        <li> <strong> Address: </strong> Crna Gora, Bar 85000</li>
                    </ul>
                </div>
                <div className="about-us__map">
                    <img src={Map} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;
