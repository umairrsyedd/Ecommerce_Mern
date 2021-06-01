import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./GlobalStyles/bootstrap.min.css";
import "./GlobalStyles/App.css";
import HomeScreen from "./Screens/Home/";
import ProductScreen from "./Screens/Product";
import CartScreen from "./Screens/Cart";
import LoginScreen from "./Screens/Login";
export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/login" component={LoginScreen} />
      </Container>
      <Footer />
    </Router>
  );
}
