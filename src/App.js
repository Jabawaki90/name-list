import React, { useState } from "react";
import FormInput from "../src/component/FormInput";
import PersonListContainer from "./component/PersonListContainer";

const App = (props) => {
  const [personList, setPersonList] = useState([]);

  const getLatestPerson = (props) => {
    console.log("in Apps");
    setPersonList((prev) => {
      return [...prev, props];
    });
    console.log(personList);
  };

  return (
    <div>
      <FormInput latest={getLatestPerson} />
      <PersonListContainer list={personList} />
    </div>
  );
};

export default App;
