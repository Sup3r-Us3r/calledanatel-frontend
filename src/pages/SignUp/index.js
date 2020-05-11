import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import cogoToast from 'cogo-toast';

import api from '../../services/api';
import history from '../../services/history';

import backgroundAuth from '../../assets/backgroundAuth.svg';

export default function SignUp() {
  const [nameValue, setNameValue] = useState('');
  const [agentValue, setAgentValue] = useState('');

  function fieldValidation(fields) {
    const validation = Yup.object().shape({
      name: Yup.string().required(),
      agent: Yup.number().required(),
    });

    return validation.isValid(fields);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const data = {
      name: nameValue,
      agent: agentValue,
    };

    const formDataIsValid = await fieldValidation(data);

    if (!formDataIsValid) {
      return cogoToast.error('Erro de validação, tente novamente!', {
        position: 'top-right',
      });
    }

    try {
      const register = await api.post('/register', data);

      if (!register) {
        return cogoToast.error('Erro ao registrar usuário.', {
          position: 'top-right',
        });
      }

      setNameValue('');
      setAgentValue('');

      cogoToast.success('Usuário registrado com sucesso.', {
        position: 'top-right',
      });

      return history.push('/login');
    } catch (err) {
      const { error } = err.response.data;

      return cogoToast.error(error, {
        position: 'top-right',
      });
    }
  }

  return (
    <>
      <section>
        <div>
          <h1>Tratativas Anatel</h1>
          <p>Registre-se para verificar as tratativas em tempo real</p>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Nome de usuário"
            autoComplete="off"
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
          />
          <input
            name="agent"
            type="text"
            placeholder="Agente"
            autoComplete="off"
            onChange={(e) => setAgentValue(e.target.value)}
            value={agentValue}
          />
          <button type="submit">Registrar</button>
        </form>
        <Link to="/login">Fazer login</Link>
      </section>
      <section>
        <img src={backgroundAuth} alt="Background Auth" />
      </section>
    </>
  );
}
