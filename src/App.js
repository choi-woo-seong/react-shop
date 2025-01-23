import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data/shoes-data";
import { useState } from "react";
import Product from "./component/product";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import axios from "axios";

function App() {
  const [product, setProduct] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/main");
              }}
            >
              {/* <Link to={"/"}>
                Home
              </Link> */}
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      {/* 라우터 처리 */}
      <Routes>
        <Route
          path="/main"
          element={
            <div>
              <MainPage product={product} />
            </div>
          }
        ></Route>
        <Route
          index
          element={
            <div>
              <MainPage product={product} />
            </div>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <div>
              <DetailPage product={product}></DetailPage>
              <MainPage product={product} />
            </div>
            
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <div>
              <CartPage></CartPage>
            </div>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <div>
              <AboutPage></AboutPage>
            </div>
          }
        >
          <Route path="member" element={<div>직원소개 페이지</div>}></Route>
          <Route path="location" element={<div>길안내 페이지</div>}></Route>
        </Route>
        <Route
          path="/event"
          element={
            <div>
              <EventPage></EventPage>
            </div>
          }
        >
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h4>404. That's an error</h4>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
