import React from "react";
import { NavLink } from "react-router-dom";

export default function Button(props) {
  return (
    <>
      <NavLink to={`${props.route}`}>
        <button type='button' className='btn btn-warning'>
          {props.name}
        </button>
      </NavLink>
    </>
  );
}
