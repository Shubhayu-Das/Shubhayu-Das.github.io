import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, CardDeck, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

import  Header from './Header.js';
import Footer from  './Footer.js';

function Projects(props) {
    
    const collaborators = (check) => {
        if(check !== "")
        return(
            <React.Fragment><strong>Collaborators: </strong>{check}</React.Fragment>
        );
        else
        return(
            <React.Fragment>Solo project</React.Fragment>
        );
    };

    const allCards = props.projects.map((project) => {
        return (
            <Card key = {project.id} className="col-12 col-md-4 mr-md-5 mt-5 p-0 pt-2">
                <Link className = "text-decoration-none" to = {`projects/${project.id}`} >
                    <CardTitle className = "text-center" tag="h3">{project.name}</CardTitle>
                    <CardBody style = {{"paddingBottom": "calc(8vh)"}}>
                        <div className="text-center">{collaborators(project.collaborators)}</div>                   <br/>
                        <strong>Tech Stack: </strong>{project.tech_stack}                    <br/>
                        <strong>Status: </strong> {project.status}                           <br/><br/>
                    </CardBody>
                    <CardFooter className = "text-center" style = {{"position": "absolute", "bottom": "0", "width": "100%" }}>Click here to find out more about this project</CardFooter>
                </Link>
            </Card>
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
                        <BreadcrumbItem><Link className="text-decoration-none" to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active> Projects </BreadcrumbItem>
                    </Breadcrumb>
                </Fade>
                <Fade>
                    <CardDeck className="justify-content-center col-12 offset-md-1 ml-md-3 mb-5">
                        {allCards}
                    </CardDeck>
                </Fade>
            </div>
            <Fade big>
                <Footer />
            </Fade>
        </React.Fragment>
        )
}

export default Projects;