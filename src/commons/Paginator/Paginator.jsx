import React, { useState } from 'react';
import styles from './Paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
    
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
      <div>
        { portionNumber > 1 &&
          <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Priveous</button>
        }
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return <span 
              onClick={(e) => {onPageChanged(p)}} 
              key={p} 
              className={`${currentPage === p && styles.selected_page} ${styles.pages}`}
              >{p}</span>}
          )
        }
      {/* {pages.map((elem) => {
        return <span onClick={(e) => {onPageChanged(elem)}} key={elem} className={`${currentPage === elem && styles.selected_page} ${styles.pages}`}>{elem}</span>}
      )} */}
      { portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
      }
    </div>
  );
};

export default Paginator;