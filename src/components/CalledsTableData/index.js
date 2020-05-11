import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FiEdit2 as BtnEdit, FiDelete as BtnDelete } from 'react-icons/fi';
import cogoToast from 'cogo-toast';

import {
  sendEditDataRequest,
  setToggleEditRequest,
} from '../../store/modules/updateFormData/actions';

import socket from '../../services/websocket';
import api from '../../services/api';

import { handleConvertDateToString } from '../../util/handleDateField';

import { Table, ContainerTable } from './styles';

export default function CalledsTableData({ currentCalleds }) {
  const dispatch = useDispatch();

  function handleEditTableData(idContent) {
    const dataEdit = currentCalleds.filter(
      (called) => called._id === idContent
    )[0];

    dispatch(sendEditDataRequest(dataEdit));
    dispatch(setToggleEditRequest(true));
  }

  async function handleDeleteTableData(idContent) {
    const dataDelete = currentCalleds.filter(
      (called) => called._id === idContent
    )[0];

    try {
      const response = await api.delete(`/protocol/delete/${dataDelete._id}`);

      if (!response) {
        return cogoToast.error('Erro ao deletar tratativa.', {
          position: 'top-right',
        });
      }

      cogoToast.success('Tratativa deletada com sucesso.', {
        position: 'top-right',
      });

      return socket.emit('changeData', true);
    } catch (err) {
      const { error } = err.response.data;

      return cogoToast.error(error, {
        position: 'top-right',
      });
    }
  }

  return (
    <ContainerTable>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Protocolo Anatel</th>
            <th>Chamado HelpDesk</th>
            <th>Prazo</th>
            <th>Situação</th>
            <th>Setor</th>
            <th>Ações</th>
            <th>Observações</th>
          </tr>
        </thead>

        <tbody>
          {currentCalleds.map((called) => (
            <tr key={called._id}>
              <td>
                <span>{called.name}</span>
              </td>
              <td>
                <span>{called.anatelProtocol}</span>
              </td>
              <td>
                <span>{called.helpdeskCalled}</span>
              </td>
              <td>
                <span>{handleConvertDateToString(called.calledDuration)}</span>
              </td>
              <td>
                <span>{called.situationCalled}</span>
              </td>
              <td>
                <span>{called.sector}</span>
              </td>
              <td>
                <BtnEdit
                  size={17}
                  color="#7159c1"
                  onClick={() => handleEditTableData(called._id)}
                />
                <BtnDelete
                  size={17}
                  color="#fc6771"
                  onClick={() => handleDeleteTableData(called._id)}
                />
              </td>
              <td>
                <span>{called.observations}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ContainerTable>
  );
}

CalledsTableData.propTypes = {
  currentCalleds: PropTypes.oneOfType([PropTypes.array]).isRequired,
};
