import React from "react";

export default function CardOffers(props) {
  const { data } = props;

  const converterPrice = (i) => {
    console.log(data[i].price);
    const str = data[i].price.toString();
    const len = str.length;
    const int = str.slice(0, len - 2);
    const dec = str.slice(len - 2);
    return `R$ ${int},${dec}`;
  };

  return (
    <>
      {data.map((offer, index) => {
        return (
          <div key={index} className='card card-box'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <p>Id: {offer.id}</p>
              </li>
              <li className='list-group-item'>
                <p>{offer.name}</p>
              </li>
              <li className='list-group-item'>
                <p>{converterPrice(index)}</p>
              </li>
              <li className='list-group-item'>
                <p>
                  selecione:
                  <input
                    className='form-check-input m-1'
                    type='checkbox'
                    defaultChecked={offer.isSelected}
                    aria-label='Checkbox for following text input'
                  />
                </p>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
