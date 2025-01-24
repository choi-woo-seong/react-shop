import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { addQty, minusQty, deleteData, sort, revers } from '../../store';

function CartPage(probs){
  let dispatcher = useDispatch();
  let sum = 0;
  let result = 0;

  let userName = useSelector((state) => {
    return state.userName;
  })

  let productStock = useSelector((state) =>  {
    return state.productStock;
  })

  let cartData = useSelector((state) => {
    return state.cartData;
  })
  console.log(userName);
  console.log(productStock);
  console.log(cartData);
  
  //스토어에 있는 변경함수 호출하는 택배기사를 생성
  

  let loggindUser = useSelector((state) => {
    return state.loggindUser;
  })

  let imsiData = useSelector((state) => {
    return state.imsiData;
  })

  return (
    <div>
      {loggindUser}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>
              상품명
              <span onClick={() => {
                                    dispatcher(sort());
                                  }}>▲</span>
              <span onClick={() => {
                                    dispatcher(revers());
                                  }}>▼</span>
            </th>
            <th>단가</th>
            <th>금액</th>
            <th>수량</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cartData.map((x,i) => {
              return (
                <tr>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.price}</td>
                  <td>{x.sumprice}</td>
                  <td>{x.count} <span onClick={() => {
                                    dispatcher(addQty(x));
                                  }} >➕</span>
                                  <span onClick={() => {
                                    dispatcher(minusQty(x));
                                  }} >➖</span></td>
                  <td onClick={() => {
                    dispatcher(deleteData(x.id));
                  }}>🗑️</td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={4}>총 금액</td>
            <td colSpan={2}>{
                cartData.map((x,i)=>{
                  sum = x.price * x.count;
                  result = result + sum;
                })
            }{result}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CartPage;