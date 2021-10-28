import React, { useEffect, useState } from "react";
import "../style/style.css";
import { api, body } from "../api/api";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Home(props) {
  const [cep, setCep] = useState([]);
  const paramsCep = props.match.params.cep;

  useEffect(() => {
    api
      .get(`${paramsCep}${body}`)
      .then((response) => {
        setCep(response.data);
      })
      .catch((err) => {
        console.log("erro");
        setCep([]);
      });
  }, [paramsCep]);
  return (
    <>
      {cep.length !== 0 ? (
        <header id='home'>
          <div className='content'>
            <Form cep={cep} />
          </div>
          <div className='btn-home'>
            <Button name={"Veja ofertas na sua região"} route={"/offers"} />
          </div>
        </header>
      ) : (
        <div id='home'>
          <h1>Cep não encontrado</h1>
          <Button name={"Retornar"} route={"/"} />
        </div>
      )}
    </>
  );
}
