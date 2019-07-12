import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { MediaQuery } from "react-responsive";
import { Fade } from "react-reveal";

import Header from "./Header.js";
import Footer from "./Footer.js";

function RenderBlock(blog) {
	blog = blog.blog;
	return (
		<Card>
			<Link className="text-decoration-none" to={`blogs/${blog.id}`}>
				<CardBody className="align-self-center">
					<div className="row justify-content-center justify-content-md-around">
						<MediaQuery query="(max-device-height: 768px)">
							<CardTitle
								className="text-center font-weight-bold"
								style={{ minWidth: "80%" }}
								tag="h3">
								{blog.title}
							</CardTitle>
						</MediaQuery>
						<MediaQuery query="(min-device-height: 768px)">
							<CardTitle className="text-center font-weight-bold" tag="h3">
								{blog.title}
							</CardTitle>
						</MediaQuery>
						<CardSubtitle className="text-center text-muted mt-md-2 offset-md-1">
							{blog.date}
						</CardSubtitle>
					</div>
					<div className="row justify-content-center ">
						<CardText className="text-center" tag="h5">
							{" "}
							{"Topic: " + blog.description}{" "}
						</CardText>
					</div>
				</CardBody>
			</Link>
		</Card>
	);
}

function Blogs(props) {
	const renderCard = props.blogs.map(blog => {
		return (
			<Fade key={blog.id}>
				<div
					className="row justify-content-center mt-md-5 mt-4"
					style={{ maxWidth: "100vw" }}>
					<div className=" col-10 col-md-8 offset-1 offset-md-2 m-1">
						<RenderBlock blog={blog} />
					</div>
				</div>
			</Fade>
		);
	});

	return (
		<React.Fragment>
			<Fade big>
				<Header />
			</Fade>

			<div className="variation" style={{ textDecoration: "none" }}>
				<Fade big>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link className="text-decoration-none" to="/home">
								Home
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active> Blogs </BreadcrumbItem>
					</Breadcrumb>
				</Fade>
				<Fade big>
					<div
						className="col-10 col-md-8 offset-1 offset-md-2 pt-5 text-center"
						style={{ fontSize: "1.2rem" }}>
						So I am not much of a blog writer. But I have this section to
						explain how I went about with some of the projects that I have
						worked on. I also like to address a few social issues once in a
						while. Just <strong> click on the cards </strong> to read the blog.
					</div>
				</Fade>
				<div className="mb-5">{renderCard}</div>
			</div>
			<Fade big>
				<Footer />
			</Fade>
		</React.Fragment>
	);
}
export default Blogs;
