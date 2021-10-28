import React, { useState } from "react";

export default function Form(props) {
  const { cep } = props;

  const [inputValue, setInputValue] = useState({
    rua: `${cep.logradouro}`,
    bairro: `${cep.bairro}`,
    uf: `${cep.uf}`,
    cidade: `${cep.localidade}`,
    cep: `${cep.cep}`,
  });

  return (
    <>
      <div className='card'>
        <div
          className='card-header'
          style={{ textAlign: "center", fontSize: "2rem" }}
        >
          Endereço
        </div>
        <form className='row g-1 m-2'>
          {/* rua */}
          <div className='col-md-12 '>
            <label htmlFor='validationServer02' className='form-label'>
              Rua
            </label>
            <input
              type='text'
              className='form-control '
              value={inputValue.rua}
              onChange={(e) => {
                setInputValue({ ...inputValue, rua: e.target.value });
              }}
              required
            />
          </div>

          {/* Bairro */}
          <div className='col-md-8'>
            <label htmlFor='validationServer02' className='form-label'>
              Bairro
            </label>
            <input
              type='text'
              className='form-control'
              value={inputValue.bairro}
              onChange={(e) => {
                setInputValue({ ...inputValue, bairro: e.target.value });
              }}
              required
            />
          </div>

          {/* uf */}
          <div className='col-md-4'>
            <label htmlFor='validationServer02' className='form-label'>
              Uf
            </label>
            <input
              type='text'
              className='form-control'
              value={inputValue.uf}
              onChange={(e) => {
                setInputValue({ ...inputValue, uf: e.target.value });
              }}
              required
            />
          </div>

          {/* Cidade */}
          <div className='col-md-6'>
            <label htmlFor='validationServer02' className='form-label'>
              Cidade
            </label>
            <input
              type='text'
              className='form-control'
              value={inputValue.cidade}
              onChange={(e) => {
                setInputValue({ ...inputValue, cidade: e.target.value });
              }}
              required
            />
          </div>

          {/* cep */}
          <div className='col-md-6'>
            <label htmlFor='validationServer02' className='form-label'>
              Cep
            </label>
            <input
              type='text'
              className='form-control '
              value={inputValue.cep}
              onChange={(e) => {
                setInputValue({ ...inputValue, cep: e.target.value });
              }}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
}
