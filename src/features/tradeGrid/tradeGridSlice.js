import { createSlice } from '@reduxjs/toolkit';

const trades = [{  
  counterparty: "Inter Bank", isin: "X123", countryOfIssue: "CAD", price: 2.48, quantity:1000, filter: true
},  {
  counterparty: "East Asia Bank", isin: "W987", countryOfIssue: "FRF", price: 12.93, quantity:1000, filter: true
}, {
  counterparty: "Bank of Iberia", isin: "X123", countryOfIssue: "UKP", price: 7.32, quantity:1000, filter: true
}]

export const tradeGridSlice = createSlice({
  name: 'tradeGrid',
  filter: [],
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
    getTrades: (state, action) => {
      state.rowData = action.payload;
    },
  },
});

export const { setFilter, getTrades } = tradeGridSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getTradesAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getTradesAsync = filter => dispatch => {
  setTimeout(() => {
    dispatch(getTrades(trades));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.tradeGrid.value)`
export const selectColumnDefs = state => state.tradeGrid.columnDefs;
export const selectRowData = state => state.tradeGrid.rowData;

export default tradeGridSlice.reducer;
