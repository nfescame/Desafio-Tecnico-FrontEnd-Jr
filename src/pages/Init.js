import React, { useState } from "react";

import Search from "../components/Search";
import Button from "../components/Button";

export default function Init() {
  const [searchCep, setSearchCep] = useState("");

  const handleChange = (event) => {
    setSearchCep(event.target.value);
  };
  return (
    <>
      <div className='container'>
        <Search handleChange={handleChange} searchCep={searchCep} />
        {searchCep ? (
          <Button name='Procurar' route={`/home/${searchCep}`} />
        ) : null}
      </div>
    </>
  );
}
