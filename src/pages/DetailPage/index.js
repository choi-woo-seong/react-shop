import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();
  let strPrice = props.product[id].price.toLocaleString('ko-KR');
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src = {process.env.PUBLIC_URL + `../images/shoes${id}.jpg`} width="100%"></img>
        </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.product[id].title}</h4>
            <p>{props.product[id].content}</p>
            <p>{strPrice}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
      </div>

    </div>
  )
}

export default Detail;