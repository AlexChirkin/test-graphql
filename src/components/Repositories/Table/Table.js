import React from "react";

import PropTypes from "prop-types";

import tableStyles from "./Table.module.css";

const mdash =  '\u2014'

const Table = ({ data, loading }) => {

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
          {data.map((v) => {
            const {node} = v
            return <tr key={node?.id}>
              <td>
                {
                  <a
                    className="link"
                    href={node?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {node?.name}
                  </a>
                }
              </td>
              <td>{node.primaryLanguage?.name || mdash}</td>
              <td>{node.licenseInfo?.name || mdash}</td>
              <td>{node.stargazers?.totalCount || mdash}</td>
            </tr>
          })}
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
