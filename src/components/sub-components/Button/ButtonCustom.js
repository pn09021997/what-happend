import React from 'react'

import "./ButtonCustom.css"

export default function ButtonCustom({ children }) {
  return (
    <button className="button-custom"> { children } </button>
  );
}
