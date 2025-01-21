import React from "react";
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Product(props){
  let navigate = useNavigate();
  return (
    props.product.map(function(product,i) {
      return(
        <Col>
          <img  onClick={() => {
            navigate(`/detail/${i}`) 
          }} src={process.env.PUBLIC_URL + `../images/shoes${props.product[i].id + 1}.jpg`} width='80%'></img>
          <h4>{props.product[i].title}</h4>
          <p>{props.product[i].content}</p>
        </Col>
      )
    })
  );
}

export default Product;