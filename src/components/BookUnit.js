import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Breadcrumb, BreadcrumbItem, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MediaQuery } from 'react-responsive';

import ReactHtmlParser from 'react-html-parser';
import { Fade } from 'react-reveal';

import Header from './Header.js';

function Unit(book){
    book = book.book;
    return (
        <div className = "row justify-content-center m-4" style={{"fontFamily": "Merriweather"}}>
            <Card className = "col-12 col-md-8 offset-md-2 m-md-4 m-1">
                <CardBody>
                    <div style={{"display": "flex", "justifyContent": "center"}}>
                        <MediaQuery query="(min-width: 768px)">
                            <CardImg src={process.env.PUBLIC_URL+book.path} alt={book.bookName} style={{'height': '60vh', 'maxWidth': "25vw"}}></CardImg>
                        </MediaQuery>
                        <MediaQuery query="(max-width: 768px)">
                            <CardImg src={process.env.PUBLIC_URL+book.path} alt={book.bookName} style={{'height': '50vh', 'maxWidth': "75vw"}}></CardImg>
                        </MediaQuery>                    
                    </div>
                    <MediaQuery query="(min-device-height: 768px)">
                        <CardTitle  className="text-center m-3" tag="h1"> {book.bookName} </CardTitle>
                        <CardSubtitle className="text-right text-muted" tag="h3"> {"by "+book.authorName} </CardSubtitle>
                        <CardText className = "text-left mt-4 mb-2" style={{"fontSize": "1.4rem"}}>{ ReactHtmlParser(book.review) }</CardText>
                    </MediaQuery>
                    
                    <MediaQuery query='(max-device-height: 768px)'>
                        <CardTitle  className="text-center m-2" tag="h3"> {book.bookName} </CardTitle>
                        <CardSubtitle className="text-right text-muted" tag="h5"> {"by "+book.authorName} </CardSubtitle>
                        <CardText className = "text-left mt-4 mb-2" style={{"fontSize": "1.2rem"}}>{ ReactHtmlParser(book.review) }</CardText>
                    </MediaQuery>
                    
                </CardBody>
            </Card>
        </div>
    );
}

function BookUnit(props) {
    return (
        <React.Fragment>
            <Fade big>
                <Header />
                
                <Breadcrumb className = "text-decoration-none">
                    <BreadcrumbItem><Link className="text-decoration-none" to="/home"> Home </Link></BreadcrumbItem>            
                    <BreadcrumbItem><Link className="text-decoration-none" to="/books_read"> Books Read </Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.book.bookName} </BreadcrumbItem>
                </Breadcrumb>
                <Unit book = {props.book} />
            </Fade>
        </React.Fragment>
    )
}

export default BookUnit;