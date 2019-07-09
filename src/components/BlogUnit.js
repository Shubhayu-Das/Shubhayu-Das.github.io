import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MediaQuery } from 'react-responsive';
import ReactHtmlParser from 'react-html-parser'

import { Fade } from 'react-reveal';
import Header from './Header.js';

function Unit(blog){
    blog = blog.blog;
    return (
        <Card className = "col-10 col-md-8 offset-1 offset-md-2 mt-5" style={{"fontFamily": "Merriweather"}}>
            <CardBody>
                <MediaQuery query = '(max-device-height: 768px)'>
                    <CardTitle className="text-center" style={{'fontSize': '1.8rem'}}>{blog.title}</CardTitle>
                    <CardSubtitle className = "text-md-right text-center text-muted mr-md-5" style={{'fontSize': '1rem'}}> {"posted on: "+blog.date} </CardSubtitle>
                    <CardText className = "p-2 mt-5 text-left" style={{'fontSize': '1rem'}}> { ReactHtmlParser(blog.content) } </CardText>
                </MediaQuery>
                <MediaQuery query = '(min-device-height: 768px)'>
                    <CardTitle className="text-center" style={{'fontSize': '2.5rem'}}>{blog.title}</CardTitle>
                    <CardSubtitle className = "text-md-right text-center text-muted mr-md-5" style={{'fontSize': '1.4rem'}}> {"posted on: "+blog.date} </CardSubtitle>
                    <CardText className = "p-2 mt-5 text-left" style={{'fontSize': '1.4rem'}}> { ReactHtmlParser(blog.content) } </CardText>
                </MediaQuery>
            </CardBody>
        </Card>
    );
}

function BlogUnit(props) {
    return (
        <React.Fragment>
            <Fade big>
                <Header />
                
                <Breadcrumb className = "text-decoration-none">
                    <BreadcrumbItem><Link className="text-decoration-none" to="/home"> Home </Link></BreadcrumbItem>            
                    <BreadcrumbItem><Link className="text-decoration-none" to="/blogs"> Blogs </Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.blog.title} </BreadcrumbItem>
                </Breadcrumb>
                <Unit blog = {props.blog}/>
            </Fade>
        </React.Fragment>
    )
}

export default BlogUnit;