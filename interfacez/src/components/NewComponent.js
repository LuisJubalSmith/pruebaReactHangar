import React, { useState } from 'react';

const NewComponent = () => {
  const [resultado, actualizarContador] = useState({
    input: '',
  });

  const actualizarState = (e) => {
    actualizarContador({
      ...resultado,
      [e.target.name]: e.target.value,
    });
  };

  const { input } = resultado;

  let contador = 0;
  const incrementar = () => {
    if (contador == 5) {
      alert('Maximo permitido alcanzado: 3');
    } else {
      document.form.input.value = contador++;
    }
  };

  const decrementar = () => {
    if (contador == 0) {
      alert('Minimo permitido alcanzado: 0');
    } else {
      document.form.input.value = contador--;
    }
  };

  return (
    <div>
      <form name='form'>
        <input type='button' onClick={incrementar} value='aumentar' />
        <input type='button' onClick={decrementar} value='disminuir' />
        <label>
          <input
            name='input'
            type='text'
            onChange={actualizarState}
            value={input}
          />
        </label>
      </form>
    </div>
  );
};

export default NewComponent;
