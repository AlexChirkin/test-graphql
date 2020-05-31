import React, { useMemo, useState } from "react";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { GET_POOL } from "../../gql/query/fetchData";
import Table from "./Table/Table";
import FilterLicense from "./FilterLicense/FilterLicense";
import repStyles from "./Repositories.module.css";
import Search from "./Search/Search";
import Pagination from "./Pagination/Pagination";

const perPage = 15;
const defaultCursorParam = {
  before: null,
  after: null,
  first: perPage,
  last: null,
};

const Repositories = () => {
  const [license, setLicense] = useState(null);
  const [search, setSearch] = useState("");
  const [cursor, setCursor] = useState(defaultCursorParam);
  const lastMonth = useMemo(() => moment().subtract(1, "month").format("YYYY-MM-DD"), []);
  const qs = useMemo(
    () => `
    ${search || ""} 
    language:javascript 
    sort:stars-desc 
    created:>${lastMonth} 
    ${license ? `license:${license}` : ""}
    `,
    [license, lastMonth, search]
  );

  const { data, loading } = useQuery(GET_POOL, {variables: { qs, ...cursor }});

  return (
    <div className={repStyles.repBlock}>
      <Search
        setSearch={setSearch}
        loading={loading}
        setCursor={setCursor}
        defaultCursorParam={defaultCursorParam}
      />
      <FilterLicense
        setLicense={setLicense}
        setCursor={setCursor}
        defaultCursorParam={defaultCursorParam}
      />
      <Table data={data?.search?.edges || []} loading={loading}/>
      <Pagination
        pageInfo={data?.search.pageInfo}
        setCursor={setCursor}
        loading={loading}
        perPage={perPage}
      />
    </div>
  );
};

export default Repositories;
