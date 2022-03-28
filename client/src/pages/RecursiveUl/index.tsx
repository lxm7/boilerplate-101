import React from "react";

import data from "./file-structure";
import UnorderedList from "./UnorderedList";

const RecursiveUl = () => {
  return (
    <div className="App">
      <h2>File Structure Accordion Exercise</h2>
      <p>
        Click on the ul's to collapse or expand its list items and retain the
        state at each level
      </p>
      {data.children.map(list => (
        <UnorderedList key={list.id} list={list} />
      ))}
    </div>
  );
};

export default RecursiveUl;
