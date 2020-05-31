import React from "react";
import PropTypes from "prop-types";
import tableStyles from "./Table.module.css";

const Table = (props) => {
  const { data, loading } = props;

  if (!data.length) {
    return <div>No data</div>
  }

  return (
    <div className={tableStyles.tableStyles}>
      <table className={`${tableStyles.repoTable} ${loading ? tableStyles.loading : ''}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>License</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr key={v.node?.id}>
              <td>
                {
                  <a
                    className="link"
                    href={v.node?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.node?.name}
                  </a>
                }
              </td>
              <td>{v.node.primaryLanguage?.name || "\u2014"}</td>
              <td>{v.node.licenseInfo?.name || "\u2014"}</td>
              <td>{v.node.stargazers?.totalCount || "\u2014"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Table;
