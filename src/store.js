import {configureStore, createSlice} from '@reduxjs/toolkit'

//createSlice == useState 역할

let imsiData = createSlice({
  name : 'imsidata',
  initialState : {
    name : '장원영',
    groupName : '아이브',
    age : 20
  },
  reducers : {
    changeGroup(state){
      state.groupName = '아이브그룹'
    },
    // state : 원래의 값, action 저쪽에서 넘어온 값
    // payload : 화물, 택배
    addAge(state, action){
      state.age = state.age + action.payload;
    }
  }
})

let userName = createSlice({
  name : 'userName',
  initialState : ['kim','lee','park']
})

let productStock = createSlice({
  name : 'productStock',
  initialState : [10, 5, 2]
})


let cartData = createSlice({
  name : 'cartData',
  initialState : [
    { id:0, title: 'White and Black', price: 120000, sumprice: 240000 , count : 2},
    { id:2, title: 'Gray Yordan', price: 130000, sumprice: 130000 , count : 1},
  ],
  reducers : {
    buyItem(state,action){
      let p_title = []
      state.map((x,i) => {
        p_title.push(x.title);
        if(x.id === action.payload.id){
           x.count++;
           state[i].sumprice = x.price * state[i].count;
        }
      })

      state.push(action.payload);

      if(state[state.length - 1].count == null){
        state[state.length - 1].count = 0;
        state[state.length - 1].count++;
        state[state.length - 1].sumprice = action.payload.price;
      }

      state.map((p,i) => {
        if(p_title[i] === action.payload.title){
          state.pop();
        }else{
          return;
        }
      })

    },
    addQty(state, action){
      state.map((x)=> {
        if(x.id === action.payload.id){
          x.count++; 
          x.sumprice = action.payload.price * x.count;
        }
      })
    },
    minusQty(state, action){
      state.map((x)=> {
        if(x.id === action.payload.id && x.count != 0){
          x.count--; 
          x.sumprice = action.payload.price * x.count;
        }
      })
    },
    sort(state){
      state.sort((x, y) => {
        if(x.title > y.title) return 1; // 크면 바꿈
        if(x.title < y.title) return -1;// 작으면 바꿈
        return 0; //안바꿈
      })
    },
    revers(state){
      state.sort((x, y) => {
        if(x.title > y.title) return -1; // 크면 바꿈
        if(x.title < y.title) return 1;// 작으면 바꿈
        return 0; //안바꿈
      })
    },
    deleteData(state, action){
      state.map((p,i) => {
        if(p.id === action.payload){
          state.pop();
        }
      })
    }
  }
})

let loggindUser = createSlice({
  name : 'loggindUser',
  initialState : 'zzzmini님의 장바구니',
  // 수정
  reducers : {
    // state : 원래의 데이터를 의미(zzzmini)
    changeUserName(state){
      return state + '님'
    }
  }
})

export default configureStore({
  reducer : {
    userName : userName.reducer,
    productStock : productStock.reducer,
    cartData : cartData.reducer,
    loggindUser : loggindUser.reducer,
    imsiData : imsiData.reducer,
  }
})

export let { addQty, minusQty, buyItem,deleteData, sort, revers} = cartData.actions;

export let { changeUserName } = loggindUser.actions;

export let { changeGroup , addAge} = imsiData.actions;
