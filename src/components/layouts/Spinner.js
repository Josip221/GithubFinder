import React from 'react';
import Spinnerg from './assets/spinner.gif';

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img width={180} className="text-center mx-auto" src={Spinnerg}></img>
    </div>
  );
}

export default Spinner;
