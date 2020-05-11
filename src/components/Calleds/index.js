import React, { useState, useEffect } from 'react';
import cogoToast from 'cogo-toast';

import CalledsTableData from '../CalledsTableData';
import Pagination from '../Pagination';

import socket from '../../services/websocket';
import api from '../../services/api';

import { Container } from './styles';

export default function Calleds() {
  const [calleds, setCalleds] = useState([]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [calledsPerPage] = useState(10);

  const indexOfLastCalled = currentPage * calledsPerPage;
  const indexOfFirstCalled = indexOfLastCalled - calledsPerPage;
  const currentCalleds = calleds.slice(indexOfFirstCalled, indexOfLastCalled);

  function handlePaginate(pageNumber) {
    return setCurrentPage(pageNumber);
  }

  useEffect(() => {
    async function handleGetDataForTable() {
      try {
        const protocols = await api.get('/protocols');

        if (!protocols) {
          return cogoToast.error('Erro ao obter dados.', {
            position: 'top-right',
          });
        }

        return setCalleds(protocols.data);
      } catch (err) {
        const { error } = err.response.data;

        return cogoToast.error(error, {
          position: 'top-right',
        });
      }
    }

    handleGetDataForTable();

    function handleUpdateTableWhenChangeData(response) {
      if (response) {
        handleGetDataForTable();
      }
    }

    socket.on('changeData', handleUpdateTableWhenChangeData);

    return () => socket.off('changeData', handleUpdateTableWhenChangeData);
  }, []);

  return (
    <Container>
      <CalledsTableData currentCalleds={currentCalleds} />
      <Pagination
        currentPage={currentPage}
        calledsPerPage={calledsPerPage}
        totalCalleds={calleds.length}
        paginate={handlePaginate}
      />
    </Container>
  );
}
