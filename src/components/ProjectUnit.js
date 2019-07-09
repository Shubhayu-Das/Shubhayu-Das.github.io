import React from 'react';
import { Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';

import Header from './Header.js';

function Unit(project){
    project = project.project;
    const collaborators = (check) => {
        if(check !== "")
        return(
            <React.Fragment><strong>Collaborators: </strong>{check}</React.Fragment>
        );
        else
        return(
            <React.Fragment> Solo project</React.Fragment>
        );
    };

    let styling = {
        "color": "#0000ff",
        "borderBottom": "2px dashed #dd0000"
    };
    return(
        <Card className="col-10 col-md-8 offset-1 offset-md-2 p-3 mt-5">
            <CardTitle className = "text-center" tag="h3">{project.name}</CardTitle>
                <CardBody>
                        {collaborators(project.collaborators)}  <br />
                        <strong>Tech Stack: </strong> {project.tech_stack}    <br />
                        <strong>Status: </strong>{project.status}    <br/>
                        <strong>Link: </strong><a href = {project.link} style = {styling}>{project.name}</a>        <br/><br/> 
                        <hr style={{"border": "2px dashed rgba(0,0,0,0.1"}} />
                        <div className="text-center pb-4">Description</div> 
                        {project.description}
                </CardBody>
        </Card>
    );
}

function ProjectUnit(props) {
    return (
        <React.Fragment>
            <Fade big>
                <Header />
                <Breadcrumb className = "text-decoration-none">
                    <BreadcrumbItem><Link className="text-decoration-none" to="/home"> Home </Link></BreadcrumbItem>            
                    <BreadcrumbItem><Link className="text-decoration-none" to="/projects"> Projects </Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.project.name} </BreadcrumbItem>
                </Breadcrumb>
                <Unit project={props.project} />
            </Fade>
        </React.Fragment>
    )
}

export default ProjectUnit;