import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import blogs from '../json/blogs.json';
import books from '../json/books.json';
import certificates from '../json/certificates.json';
import projects from '../json/projects.json';

import '../stylesheets/Master.css';
import "typeface-merriweather";

import Home from './Home.js';
import Blogs from './Blogs.js';
import BlogUnit from './BlogUnit.js';
import BooksRead from './BooksRead.js';
import BookUnit from './BookUnit.js';
import Certificate from './Certificate.js';
import Projects from './Projects.js';
import ProjectUnit from './ProjectUnit.js';

class Master extends Component {

    constructor(props){
        super(props);

        this.state = {
            books: books['master'],
            blogs: blogs['master'],
            certificates: certificates['paths'],
            projects: projects['projects'],
        }
    }

    render() {
        const blogUnitComponent = ({match}) => {
        return(
            <BlogUnit blog = {this.state.blogs.filter((blog) => blog.id === parseInt(match.params.blogId, 10))[0]} />
        )};

        const bookUnitComponent = ({match}) =>{
            return(
            <BookUnit book = {this.state.books.filter((book) => book.id === match.params.bookId)[0]}/>        
        )};

        const projectUnitComponent = ({match}) => {
            return(
                <ProjectUnit project = {this.state.projects.filter((project) => project.id.toString() === match.params.projectId)[0]} />
            );
        };

        return (
            <React.Fragment>
                <Switch>
                    <Route exact path = "/" component = {() => <Home />}/>
                    
                    <Route exact path = "/blogs" component = {() => <Blogs blogs = {this.state.blogs}/>}/>
                    <Route path = "/blogs/:blogId" component={blogUnitComponent}/>
                    
                    <Route exact path = "/books_read" component= {() => <BooksRead books = {this.state.books}/>} />
                    <Route path = "/books_read/:bookId" component={bookUnitComponent}/>
                    
                    <Route exact path = "/certification" component = {() => <Certificate certificates = {this.state.certificates}/>} />
                    
                    <Route exact path = "/projects" component = {() => <Projects projects = {this.state.projects}/>} />
                    <Route path = "/projects/:projectId" component={projectUnitComponent}/>

                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Master;