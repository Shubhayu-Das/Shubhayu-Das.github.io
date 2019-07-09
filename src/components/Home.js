import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Slide, Fade } from "react-reveal";

import { NavLink } from "react-router-dom";

import "../stylesheets/Home.css";

function Home() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="intro row flex flex-column pt-md-5 justify-content-center">
					<img
						className="portfolio"
						src={process.env.PUBLIC_URL + "/resources/portfolio.jpg"}
						alt="My profile pic"
					/>
					<p className="name">Shubhayu Das</p>

					<Slide cascade right>
						<div className="linkers row">
							<a className="btn" href="https://github.com/Shubhayu-Das">
								<i
									className="fab fa-github"
									style={{ color: "white", fontSize: "30px" }}
									title="Github"
								/>
							</a>
							<a
								className="btn"
								href="https://in.linkedin.com/in/shubhayu-das-669b75179">
								<i
									className="fab fa-linkedin"
									style={{ color: "white", fontSize: "30px" }}
									title="LinkedIn"
								/>
							</a>
							<a
								className="btn"
								href="https://www.goodreads.com/user/show/66031440-shubhayu">
								<i
									className="fab fa-goodreads"
									style={{ color: "white", fontSize: "30px" }}
									title="GoodReads"
								/>
							</a>
							<a className="btn" href="https://in.pinterest.com/Shubhayu1/">
								<i
									className="fab fa-pinterest-square"
									style={{ color: "white", fontSize: "30px" }}
									title="Pinterest"
								/>
							</a>
							<a
								className="btn"
								href="https://www.quora.com/profile/Shubhayu-Das-4">
								<i
									className="fab fa-quora"
									style={{ color: "white", fontSize: "30px" }}
									title="Quora"
								/>
							</a>
							<a
								className="btn"
								href="https://stackoverflow.com/users/10836356/shubhayu">
								<i
									className="fab fa-stack-overflow"
									style={{ color: "white", fontSize: "30px" }}
									title="Stack Overflow"
								/>
							</a>
						</div>
					</Slide>

					<Fade>
						<div className="navigations row">
							<NavLink className="nav-link menuitem" to="/blogs">
								{" "}
								Blogs{" "}
							</NavLink>
							<NavLink className="nav-link menuitem" to="/projects">
								{" "}
								Projects{" "}
							</NavLink>
							<NavLink className="nav-link menuitem" to="/books_read">
								{" "}
								Books Read{" "}
							</NavLink>
							<NavLink className="nav-link menuitem" to="/certification">
								{" "}
								Certifications{" "}
							</NavLink>
						</div>
					</Fade>
					<div className="bouncers">
						<i className="fas fa-chevron-down bounce" />
						<i className="fas fa-chevron-down bounce" />
					</div>
				</div>

				<Slide right>
					<div className="about row">
						<p>Beta test version</p>
						<p>
							I'm currently working on writing the reviews in the books read
							page. This is going to take a good amount of time. Then, a few
							instructions on all the pages. The last job would be to replace
							this text with sensible content. Then peace out, apart from the
							occasional blogs and book reviews.
						</p>
					</div>
				</Slide>

				<Fade big>
					<div className="contact row">
						<div
							className="col-10 col-md-6 offset-1 offset-md-3 text-center mt-5 mb-5"
							id="content">
							Found the exact person for the job? Want to get in touch with me?{" "}
							<br />
							Feel free to get in touch with me through email, even if it's just
							for a story book suggestion! <br />
							<br />
							Just fill the form below and I will respond as soon as possible!
						</div>
						<div className="col-10 col-md-6 offset-1 offset-md-3 p-4 p-md-5 mb-4 Form">
							<Form
								acceptCharset="utf-8"
								action="https://formspree.io/shubhayu64@gmail.com"
								method="post">
								<FormGroup row>
									<Label htmlFor="userName">Your name</Label>
									<Input
										type="text"
										id="userName"
										name="userName"
										placeholder="Name"
									/>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="email">Your email id</Label>
									<Input
										type="email"
										id="email"
										name="email"
										placeholder="Please enter a valid email id!"
									/>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor="message">Your message</Label>
									<Input
										type="textarea"
										rows="6"
										id="message"
										name="message"
										placeholder="Type your message"
									/>
								</FormGroup>
								<FormGroup row>
									<div className="ml-auto mt-auto">
										<Button type="submit" color="primary">
											Send!
										</Button>
									</div>
								</FormGroup>
							</Form>
						</div>
					</div>
				</Fade>
			</div>
		</React.Fragment>
	);
}

export default Home;
