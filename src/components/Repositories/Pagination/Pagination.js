import React, { useEffect, useState, useCallback } from "react";
import paginationStyles from "./Pagination.module.css";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { setCursor, loading, pageInfo, perPage } = props;
  const [beforeCursor, setBeforeCursor] = useState(null);
  const [afterCursor, setAfterCursor] = useState(null);

  useEffect(() => {
    setBeforeCursor(pageInfo?.startCursor);
    setAfterCursor(pageInfo?.endCursor);
    return () => {};
  }, [pageInfo]);

  const handleClickPage = useCallback(
    (action) =>
      setCursor({
        before: action === "prev" ? beforeCursor : null,
        after: action === "prev" ? null : afterCursor,
        first: action === "prev" ? null : perPage,
        last: action === "prev" ? perPage : null,
      }),
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
