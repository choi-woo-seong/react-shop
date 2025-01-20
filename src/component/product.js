import React from "react";
import Col from 'react-bootstrap/Col';

function Product(props){
  return (
    props.product.map(function(product,i) {
      return(
        <Col>
          <img src={process.env.PUBLIC_URL + `./images/shoes${props.product[i].id + 1}.jpg`} width='80%'></img>
          <h4>{props.product[i].title}</h4>
          <p>{props.product[i].content}</p>
        </Col>
      )
    })
  );
}

export default Product;