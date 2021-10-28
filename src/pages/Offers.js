import React from "react";
import data from "../data/data.json";

import CardOffers from "../components/CardsOffers";
import Button from "../components/Button";

export default function Offers() {
  return (
    <>
      <section className='gallery-offers'>
        <CardOffers data={data.userData.offers} />
      </section>
      <Button name={"Ops, errei meu cep!"} route={""} />
    </>
  );
}
