import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiUsers as BtnUsers } from 'react-icons/fi';
import { GoTriangleUp as IconArrowUp } from 'react-icons/go';

import socket from '../../services/websocket';

import { ContainerButton, Users } from './styles';

export default function ShowUsersOnline() {
  const userData = useSelector((state) => state.userData.data);

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [users, setUsers] = useState([]);

  function handleToggleDropdown() {
    setToggleDropdown(!toggleDropdown);
  }

  useEffect(() => {
    function handleGetUsersOnline(usersOnline) {
      return setUsers(usersOnline);
    }

    socket.emit('userOnline', userData);
    socket.on('userOnline', handleGetUsersOnline);

    return () => socket.off('userOnline', handleGetUsersOnline);
  }, [userData]);

  return (
    <>
      <ContainerButton>
        <BtnUsers size={20} color="#fff" onClick={handleToggleDropdown} />
        {toggleDropdown && (
          <IconArrowUp
            size={20}
            color="#7159c1"
            onClick={handleToggleDropdown}
          />
        )}
      </ContainerButton>

      {toggleDropdown && (
        <Users>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <span>{user.agent}</span>
                <p>{user.name}</p>
              </li>
            ))}
          </ul>
        </Users>
      )}
    </>
  );
}
