import React from "react";

import data from "./file-structure";
import UnorderedList from "./UnorderedList";

const RecursiveUl = () => {
  return (
    <div className="App">
      <strong>File Structure Exercise</strong>
      <p>Insert tree here</p>
      {data.children.map(list => (
        <UnorderedList key={list.id} list={list} />
      ))}
    </div>
  );
};

export default RecursiveUl;
