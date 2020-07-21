import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

import { useSelector, useDispatch } from 'react-redux';
import {
  setFilter,
  getTradesAsync,
  selectColumnDefs,
  selectRowData,
} from './tradeGridSlice';
import styles from './TradeGrid.module.css';

/*
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}
*/

export function TradeGrid() {
  const columnDefs = useSelector(selectColumnDefs);
  const trades = useSelector(selectRowData);
  const dispatch = useDispatch();
  const filter = 1;
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '1200px' }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={trades}>
        </AgGridReact>
      </div>

      { <div className={styles.row}>
{/*         <input
          className={styles.textbox}
          aria-label="Set increment amount"
          //filter={filter}
          onChange={e => setIncrementAmount(e.target.value)}
        />
          Add Amount */}

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getTradesAsync(filter))}
        >
          Search Trades
        </button> 
        </div>}
    </div>
  );
}
