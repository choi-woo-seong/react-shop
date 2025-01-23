import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Product from '../../component/product';
import { useState } from 'react';

function MainPage(props){
  const [product, setProduct] = useState();

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Product 
            product = {props.product}
        />
      </Row>
      <button onClick={()=>{
        axios
          .get('https://choi-woo-seong.github.io/js/react_data_02.json')
          .then((result) => {
            //요청 성공시 처리할 곳
            console.log(result.data);
            let temp = [...props.product,...result.data];
            console.log(temp);
            setProduct([... temp])
          })
          .catch(()=>{
            //요청 실패시 처리할 곳
            console.log("실패함.")
          })
      }}>데이터 가져오기</button>
    </Container>
  )
  
}

export default MainPage;

