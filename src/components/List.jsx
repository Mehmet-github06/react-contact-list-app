import React, { useState } from "react";
import Contacts from "./Contacts";

const List = ({ contatcs }) => {

  const [filterText, setFilterText] = useState("");

  const filtered = contatcs.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Contact..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contatc, index) => (
          <li key={index}>{contatc.fullname}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
