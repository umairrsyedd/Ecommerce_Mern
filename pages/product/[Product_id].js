import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../src/Components/Header";
import Rating from "../../src/Components/Rating";
import products from "../../src/products";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	ListGroupItem,
	Card,
} from "react-bootstrap";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
const ProductScreen = () => {
	const router = useRouter();
	const { Product_id } = router.query;
	const product = "Hey";
	return (
		<>
			<Head>
				<title>{product.name}</title>
				<meta name="description" content="Product Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Link href="/">
				<div className="btn btn-dark my-3">Go Back</div>
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroupItem>
							<h2>{product.name}</h2>
						</ListGroupItem>
					</ListGroup>
					<ListGroupItem>
						<Rating
							value={product.rating}
							text={`${product.numReviews} reviews`}
						/>
					</ListGroupItem>
					<ListGroupItem>Price: ${product.price}</ListGroupItem>
					<ListGroupItem>
						Description: {product.description}
					</ListGroupItem>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0
											? "In Stock"
											: "Out Of Stock"}
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
