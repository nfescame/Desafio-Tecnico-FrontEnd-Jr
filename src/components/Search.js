import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
  const { searchCep, handleChange } = props;
  return (
    <div className='container-search'>
      <h1>Seja bem vindo!</h1>
      <label className='mb-1 search-label'>Digite o cep</label>
      <div className='input-group mb-3 search-input'>
        <span className='input-group-text' id='basic-addon1'>
          <i className='bi bi-search'></i>
        </span>
        <input
          type='text'
          className='form-control'
          placeholder='Cep'
          aria-describedby='basic-addon1'
          value={searchCep}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
