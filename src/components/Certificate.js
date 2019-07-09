import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';

import '../stylesheets/Certificate.css';
import  Header from './Header.js';
import Footer from  './Footer.js';

class Certificate extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.onExited = this.onExited.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited(){
        this.animating = false;
    }

    next(){
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.certificates.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous(){
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.certificates.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const slides = this.props.certificates.map((certificate) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={certificate.key}>
                    <img src={process.env.PUBLIC_URL+certificate.path} alt = "Resource not found!" className="image"/>
                </CarouselItem>
            );
        });
        return (
            <React.Fragment>
            <Fade big>
                <Header />
            </Fade>
            <div className="variation">
                <Fade big>
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="text-decoration-none" to = "/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Certificates</BreadcrumbItem>
                    </Breadcrumb>
                </Fade>
                <div className="col-10 col-md-8 offset-1 offset-md-2 mt-5 heading-cert">
                    These are the certificates, which I have received from various places after joining college. They are mostly course certifications from some famous websites. To see a certificate better, place the mouse pointer over it to pause the slideshow.
                </div>
                <div>

                </div>
                <div id ="carousel" className="col-md-10 col-lg-7 justify-contents-center mb-5">
                    <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} onClickHandler={this.goToIndex} pause='hover' interval='3000' ride="carousel">
                    <CarouselIndicators items={this.props.certificates} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                    </Carousel>
                </div>
            </div>
            <Fade big>
                <Footer />
            </Fade>
        </React.Fragment>
        )
    }
}

export default Certificate
