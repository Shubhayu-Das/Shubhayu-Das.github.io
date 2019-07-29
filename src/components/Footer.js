import React from "react";

function Footer() {
	return (
		<div className="footer bg-dark">
			<div className="container-fluid">
				<div
					className="row justify-content-center"
					style={{ paddingTop: "calc(1.5vh)" }}>
					<a className="btn" href="https://github.com/Shubhayu-Das">
						<i
							className="fab fa-github"
							style={{ color: "white", fontSize: "24px" }}
							title="Github"
						/>
					</a>
					<a
						className="btn"
						href="https://in.linkedin.com/in/shubhayu-das-669b75179">
						<i
							className="fab fa-linkedin"
							style={{ color: "white", fontSize: "24px" }}
							title="LinkedIn"
						/>
					</a>
					<a
						className="btn"
						href="https://www.goodreads.com/user/show/66031440-shubhayu">
						<i
							className="fab fa-goodreads"
							style={{ color: "white", fontSize: "24px" }}
							title="GoodReads"
						/>
					</a>
					<a className="btn" href="https://in.pinterest.com/Shubhayu1/">
						<i
							className="fab fa-pinterest-square"
							style={{ color: "white", fontSize: "24px" }}
							title="Pinterest"
						/>
					</a>
					<a
						className="btn"
						href="https://www.quora.com/profile/Shubhayu-Das-4">
						<i
							className="fab fa-quora"
							style={{ color: "white", fontSize: "24px" }}
							title="Quora"
						/>
					</a>
					<a
						className="btn"
						href="https://stackoverflow.com/users/10836356/shubhayu">
						<i
							className="fab fa-stack-overflow"
							style={{ color: "white", fontSize: "24px" }}
							title="Stack Overflow"
						/>
					</a>
				</div>
				<div className="row justify-content-center">
					<p className="text-light">
						Shubhayu Das · {new Date().getFullYear()} · Hosted with{" "}
						<span id="heart" className="text-danger">
							♥
						</span>{" "}
						by Github
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
