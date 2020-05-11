import React from 'react';
import { FiLogOut as BtnLogout } from 'react-icons/fi';

import { ContainerButton } from './styles';

export default function Logout() {
  function handleLogout() {
    localStorage.clear();
    return window.location.reload();
  }

  return (
    <ContainerButton>
      <BtnLogout size={20} color="#fff" onClick={handleLogout} />
    </ContainerButton>
  );
}
