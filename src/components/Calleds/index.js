import React, { useState, useEffect } from 'react';
import cogoToast from 'cogo-toast';

import Loading from '../Loading';
import CalledsTableData from '../CalledsTableData';
import Pagination from '../Pagination';

import socket from '../../services/websocket';
import api from '../../services/api';

import { Container } from './styles';

export default function Calleds() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [calleds, setCalleds] = useState([]);

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
        setLoading(true);

        const protocols = await api.get('/protocols');

        if (!protocols) {
          return cogoToast.error('Erro ao obter dados.', {
            position: 'top-right',
          });
        }

        setLoading(false);
        setLoaded(true);

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
      {loaded ? (
        <>
          <CalledsTableData currentCalleds={currentCalleds} />
          <Pagination
            currentPage={currentPage}
            calledsPerPage={calledsPerPage}
            totalCalleds={calleds.length}
            paginate={handlePaginate}
          />
        </>
      ) : (
        loading && <Loading />
      )}
    </Container>
  );
}
