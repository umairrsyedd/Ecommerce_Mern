import Head from "next/head";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import HomeScreen from "../src/Components/HomeScreen";
import { Container } from "react-bootstrap";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<Head>
				<title>E-Commerce Store</title>
				<meta name="description" content="E-commerce Page Home" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Container>
				<HomeScreen />
			</Container>
			<Footer />
		</>
	);
}
