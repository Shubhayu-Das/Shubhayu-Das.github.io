import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardImg,
	CardDeck,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import MediaQuery from "react-responsive";
import { Fade } from "react-reveal";

import Header from "./Header.js";
import Footer from "./Footer.js";

function Rating(book) {
	let starCount = [],
		ratingCount = 0;
	book = book.book;

	while (ratingCount < parseInt(book.rating, 10)) {
		starCount.push(
			<i
				className="fas fa-star"
				style={{ color: "yellow" }}
				key={Math.random() * 10000000}
			/>
		);
		ratingCount++;
	}

	ratingCount += 0.5;
	if (ratingCount === parseFloat(book.rating, 10)) {
		starCount.push(
			<i
				className="fas fa-star-half"
				style={{ color: "yellow" }}
				key={Math.random() * 10000000}
			/>
		);
		ratingCount++;
	}
	while (ratingCount < 5) {
		starCount.push(
			<i
				className="fas fa-star"
				style={{ color: "yellow" }}
				key={Math.random() * 10000000}
			/>
		);
		ratingCount++;
	}

	return starCount;
}

function RenderBlock(book) {
	book = book.book;
	return (
		<Card>
			<Link className="text-decoration-none" to={`books_read/${book.id}`}>
				<CardBody>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<MediaQuery query="(min-width: 768px)">
							<CardImg
								src={process.env.PUBLIC_URL + book.path}
								alt={book.bookName}
								style={{ height: "50vh", maxWidth: "30vw" }}
							/>
						</MediaQuery>
						<MediaQuery query="(max-width: 768px)">
							<CardImg
								src={process.env.PUBLIC_URL + book.path}
								alt={book.bookName}
								style={{ height: "50vh", maxWidth: "60vw" }}
							/>
						</MediaQuery>
					</div>
					<CardTitle className="text-center mt-3" tag="h3">
						{" "}
						{book.bookName}{" "}
					</CardTitle>
					<CardSubtitle className="text-right text-muted" tag="h5">
						{" "}
						{"by " + book.authorName}{" "}
					</CardSubtitle>
					<CardText className="text-center mt-2" tag="h5">
						{" "}
						My Rating: <Rating book={book} /> <br />
						<br />
						Click to read my review!{" "}
					</CardText>
				</CardBody>
			</Link>
		</Card>
	);
}

function BooksRead(props) {
	const RenderBooksRead = props.books.map(book => {
		return (
			<div key={book.id} className="col-12 col-md-3 mr-5 mt-5">
				<RenderBlock book={book} />
			</div>
		);
	});

	return (
		<React.Fragment>
			<Fade>
				<Header />
			</Fade>

			<div className="variation">
				<Fade>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link className="text-decoration-none" to="/home">
								Home
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active> Books Read </BreadcrumbItem>
					</Breadcrumb>

					<div
						className="col-10 col-md-8 offset-1 offset-md-2 mt-5"
						style={{ fontSize: "1.3rem" }}>
						I absolutely love reading books. They have been my companions
						through all my highs and my lows. Some have made me feel happy when
						I was really low, some have made me cry, some gave me new worlds to
						dream about. Some, gave me things to think about for a really long
						time.
						<br />
						<br />
						{/* eslint-disable-next-line*/}
						After getting my smartphone, I had been rather distracted by it{" "}
						<span id="sad" role="img" aria-label="Sad">
							😓
						</span>
						. However, through my first year at college, I fortunately came
						across a few people with a passion for reading books. Similar to
						what I had once. So it began once more
						<span role="img" aria-label="happy">
							😄
						</span>
						.<br /> <br />I am only mentioning the books which have moved me in
						some way here (and by that I mean <i>emotionally</i>). To get a full
						list of the books that I am reading, check out my{" "}
						<a href="https://www.goodreads.com/user/show/66031440-shubhayu">
							Goodreads!
						</a>
						Feel free to contact me via email for story book suggestions!
						<br />
						<hr className="bg-dark" />
						<br />
					</div>
				</Fade>

				<CardDeck className="justify-content-center col-12 offset-md-1 mb-5">
					{RenderBooksRead}
				</CardDeck>
			</div>
			<Fade>
				<Footer />
			</Fade>
		</React.Fragment>
	);
}

export default BooksRead;
