import React, { Fragment, useState } from 'react';
import { registar_datos } from '../servicios/contactServicio';
import Swal from 'sweetalert2';

const Contact = () => {
  // crear State
  const [contact, actualizarContact] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  //Escribir en campo correspondiente en el state
  const actualizarState = (e) => {
    actualizarContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los datos
  const { name, email, phoneNumber, message } = contact;

  // validar formulario
  const validar = () => {
    let err = false;
    let inputRequeridos = document.querySelectorAll('[required]');
    let counter = inputRequeridos.length;

    for (let i = 0; i < counter; i++) {
      if (inputRequeridos[i].value === '') {
        err = true;
        inputRequeridos[i].classList.add('error');
      } else {
        inputRequeridos[i].classList.remove('error');
      }
    }
    return err;
  };
  // eviar los datos
  const submitContact = (e) => {
    e.preventDefault();
    let err = validar();

    let expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let expRegphoneNumber = /[0-9(-)0-9]/;
    let expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (err === true) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Revise que los campos esten llenos',
      });
    } else if (!expRegName.exec(name)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo name solo acepta letras y espacios',
      });
    } else if (!expRegEmail.exec(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo email no es valido',
      });
    } else if (!expRegphoneNumber.exec(phoneNumber)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo phoneNumber dolo acepta numeros',
      });
    } else {
      registar_datos(
        contact.name,
        contact.email,
        contact.phoneNumber,
        contact.message
      );
    }

    actualizarContact({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <Fragment>
      <section id='contact'>
        <h2>CONTACT ME</h2>
        <form onSubmit={submitContact}>
          <div>
            <input
              id='nameTxt'
              name='name'
              type='text'
              placeholder='Name'
              className='border-input'
              onChange={actualizarState}
              value={name}
              required
            />
          </div>
          <div>
            <input
              id='emailTxt'
              name='email'
              type='email'
              placeholder='Email'
              className='border-input'
              onChange={actualizarState}
              value={email}
              required
            />
          </div>
          <div>
            <input
              id='phoneNumberTxt'
              name='phoneNumber'
              type='tel'
              placeholder='Phone Number'
              className='border-input'
              onChange={actualizarState}
              value={phoneNumber}
              required
            />
          </div>
          <div>
            <input
              id='messageTxt'
              name='message'
              type='Message'
              placeholder='Message'
              className='border-input'
              onChange={actualizarState}
              value={message}
              required
            />
          </div>
          <div>
            <button id='btnSend' type='submit'>
              SEND
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
