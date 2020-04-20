import React from 'react';
import Map from '../../../assets/img/map.png';
const About = () => {
    return (
        <div className="about-us">
            <div className="about-us__text">
            <h1 className="about-us__heading">About Us</h1>
                <p className="about-us__details">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda beatae consequatur culpa doloribus facere illum iste
                    minima nostrum obcaecati officia placeat, quasi qui quibusdam ratione reiciendis
                    sequi, soluta unde voluptatem.</p>
                <p className="about-us__details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam assumenda
                    dignissimos eaque enim illum ipsam iste iure labore molestiae necessitatibus odio odit, optio
                    provident quaerat quo, rem ullam veniam!
                </p>
            </div>
            <h2 className="about-us__subheading">Where and how to contact us</h2>
            <div className="about-us__contact">
                <div className="about-us__contact-info">
                    <ul>
                        <li>Phone: 069602930</li>
                        <li>Email: nikocevicstefan@gmail.com</li>
                        <li>Address: Crna Gora,Bar Marsala Tita 23/5</li>
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
