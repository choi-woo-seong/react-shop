import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data/shoes-data';
import { useState } from 'react';
import Product from './component/product';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';

function App() {
  const [product, setProduct] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate("/")
            }}>
              {/* <Link to={"/"}>
                Home
              </Link> */}
              Home
            </Nav.Link>
            <Nav.Link onClick={() => {
              navigate("/cart")
            }}>
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              Cart
            </Nav.Link>
            <Nav.Link onClick={() => {
              navigate("/about")
            }}>
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              About
            </Nav.Link>
            <Nav.Link onClick={() => {
              navigate("/event")
            }}>
              {/* <Link to={"/cart"}>
                Cart
              </Link> */}
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

        {/* 라우터 처리 */}
        <Routes>
          <Route path='/' element={<div>메인페이지</div>}></Route>
          <Route index element={<div>홈......</div>}></Route>
          <Route path="/detail/:id" element={<div>
            <DetailPage product = {product}></DetailPage>
          </div>}>
          </Route>
          <Route path="/cart" element={<div>장바구니페이지</div>}></Route>
          <Route path="/about" element={<div><AboutPage></AboutPage></div>}>
            <Route path="member" element={<div>직원소개 페이지</div>}></Route>
            <Route path="location" element={<div>길안내 페이지</div>}></Route>
          </Route>
          <Route path="/event" element={<div><EventPage></EventPage></div>}>
            <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
          <Route path='*' element={
            <div>
              <h4>
                404. That's an error
              </h4>
            </div>
          }></Route>
        </Routes>

        <Container>
          <Row className="justify-content-md-center">
            <Product 
                product = {product}
            />
          </Row>
        </Container>
      </div>
  );
}

export default App;
