import React, {useCallback} from "react";
import Select from "react-select";
import { GET_LICENSE } from "../../../gql/query/fetchData";
import { useQuery } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import filterStyles from "./FilterLicense.module.css";

const FilterLicense = (props) => {
  const { setLicense, setCursor, defaultCursorParam } = props;
  const { data } = useQuery(GET_LICENSE);

  const onSelect = useCallback(
    (e) => {
      setLicense(e?.value || null)
      setCursor(defaultCursorParam);
    },
    [defaultCursorParam, setCursor, setLicense]
  );

  return (
    <div className={filterStyles.filter}>
      <Select
        onChange={onSelect}
        options={data?.licenses?.map((v) => ({value: v?.key,label: v?.name,}))}
        isClearable={true}
      />
    </div>
  );
};

FilterLicense.propTypes = {
  setLicense: PropTypes.func.isRequired,
  setCursor: PropTypes.func.isRequired,
  defaultCursorParam: PropTypes.object.isRequired,
};

export default FilterLicense;
