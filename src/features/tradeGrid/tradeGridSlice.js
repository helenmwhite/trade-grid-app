import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

var trades = [{  
  counterparty: "Inter Bank", isin: "X123", countryOfIssue: "CAD", price: 2.48, quantity:1000, filter: true
},  {
  counterparty: "East Asia Bank", isin: "W987", countryOfIssue: "FRF", price: 12.93, quantity:1000, filter: true
}, {
  counterparty: "Bank of Iberia", isin: "X123", countryOfIssue: "UKP", price: 7.32, quantity:1000, filter: true
}];

//const url = 'https://localhost:44346/TradePortfolio';
// const url = "https://jsonplaceholder.typicode.com/users";
//const url = "https://tradedataservice20200809190135.azurewebsites.net";
const url = "https://tradedataservice20200809190135.azurewebsites.net";

export async function  getTradesAwait() 
{
  try 
  {
    const response = fetch(url);
    if (response.status >= 200 && response.status <= 299) 
    {
      const jsonResponse = response.json();
      console.log(jsonResponse);
    } else 
    {
      // Handle errors
      console.log(response.status, response.statusText);
    }
  } catch (e) {
    console.log('error', e);
  }
}


export const tradeGridSlice = createSlice({
  name: 'tradeGrid',
  filter: 1,
  initialState: {
    columnDefs: [{
        headerName: "C'party", field: "counterparty", sortable: true   
      }, {
        headerName: "ISIN", field: "isin", sortable: true
      }, {
        headerName: "CoI", field: "countryOfIssue", sortable: true
      }, {
        headerName: "Price", field: "price", sortable: true
      }  , {
        headerName: "Qty", field: "quantity", sortable: true
      }],
      rowData: [],
      filter: [],
  },
  reducers: {
    setFilter: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.filter += 1;
    },
      getTrades: (state, action) => 
      {
        state.rowData = action.payload;
      }
     //----------------------------------

      //   try 
      //   {
      //     fetch(url)
      //     .then(response => {
      //         // handle the response
      //         return response.json;
      //     })
      //     // handle the  data
      //     .then(data => {
      //     state.rowData = data;
      //       console.log(data);
      //     })
      //     .catch(error => {
      //         // handle the error
      //         alert(error);
      //     })
      //   } 
      //   catch (e) 
      //   {
      //     console.log('error', e);
      //   };
      // }
      //----------------------------------
      // try 
      // {
      //   const response = fetch(url);
      //   if (response.status >= 200 && response.status <= 299) 
      //   {
      //     const jsonResponse = response.json();
      //     console.log(jsonResponse);
      //     state.rowData = jsonResponse;
      //   } else 
      //   {
      //     // Handle errors
      //     console.log(response.status, response.statusText);
      //   }
      // } catch (e) {
      //   console.log('error', e);
      // }
    }
  });



export const { setFilter, getTrades } = tradeGridSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getTrades(filter))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getTradesAsync = filter => dispatch => {
  try 
  {
    var json;
    var savedError;

    // axios.defaults.adapter = require('axios/lib/adapters/http');
    axios.get(url)
    
   //fetch(url)
    .then(function (response) {
      const data = response.data;
      console.log(data);
      //state.value.rowData = data; 
      //state = {...state, rowData: [0,1,2]}; 
      //state.value.rowData = {...state, rowData: data};
      //state.value.rowData = action.payload;
      //state.value.rowData = response.data;
      dispatch(getTrades(data));
    })
    .catch(function (error) {
      savedError = error;
    })
  }
  catch (e) 
  {
    console.log('error', e);
  }
}


export const getTradesAsyncXXX = filter => dispatch => {
  //setTimeout(() => {
    dispatch(getTrades(filter));
  //}, 100000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.tradeGrid.value)`
export const selectColumnDefs = state => state.tradeGrid.columnDefs;
export const selectRowData = state => state.tradeGrid.rowData;

export default tradeGridSlice.reducer;
