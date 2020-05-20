import React from 'react';

import CreateCalled from '../CreateCalled';
import UpdateCalled from '../UpdateCalled';
import ShowUsersOnline from '../ShowUsersOnline';
import Logout from '../Logout';

import anatelLogo from '../../assets/anatelLogo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <img src={anatelLogo} alt="Anatel Logo" />
        <header>Chamados da Anatel sendo verificados em tempo real</header>
      </div>
      <section>
        <ShowUsersOnline />
        <CreateCalled />
        <UpdateCalled />
        <Logout />
      </section>
    </Container>
  );
}
