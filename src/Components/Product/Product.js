import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import Link from "next/link";
const Product = ({ product }) => {
	return (
		<Card>
			<Link href={`/product/${product._id}`}>
				<a>
					<Card.Img src={product.image} variant="top" />
				</a>
			</Link>
			<Card.Body>
				<Link href={`/product/${product._id}`}>
					<a>
						<Card.Title as="div">
							<strong>{product.name}</strong>
						</Card.Title>
					</a>
				</Link>
				<Card.Text as="h6">
					<div className="my-2">{product.brand}</div>
				</Card.Text>
				<Card.Text as="div">
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text as="h3">₹{product.price}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
