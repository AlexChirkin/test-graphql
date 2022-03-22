import React, { useEffect, useState, useCallback } from "react";

import PropTypes from "prop-types";

import paginationStyles from "./Pagination.module.css";


const Pagination = ({ setCursor, loading, pageInfo, perPage }) => {
  const [beforeCursor, setBeforeCursor] = useState(null);
  const [afterCursor, setAfterCursor] = useState(null);

  useEffect(() => {
    setBeforeCursor(pageInfo?.startCursor);
    setAfterCursor(pageInfo?.endCursor);
  }, [pageInfo]);

  const handleClickPage = useCallback(
    (action) => {
      const isPrev = action === 'prev'
      setCursor({
        before: isPrev ? beforeCursor : null,
        after: isPrev ? null : afterCursor,
        first: isPrev ? null : perPage,
        last: isPrev ? perPage : null,
      })
    } ,
    [beforeCursor, afterCursor, setCursor, perPage]
  );

  if (!pageInfo?.hasNextPage && !pageInfo?.hasPreviousPage) {
    return null;
  }

  return (
    <div className={paginationStyles.pagination}>
      <button
        className={paginationStyles.btn}
        onClick={() => handleClickPage("prev")}
        disabled={loading || !pageInfo?.hasPreviousPage}
      >
        Prev
      </button>
      <button
        className={paginationStyles.btn}
        onClick={() => handleClickPage("next")}
        disabled={loading || !pageInfo?.hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  setCursor: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  perPage: PropTypes.number.isRequired,
  pageInfo: PropTypes.object,
};

export default Pagination;
