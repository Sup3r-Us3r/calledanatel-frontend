import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose as BtnClose } from 'react-icons/md';
import * as Yup from 'yup';
import cogoToast from 'cogo-toast';

import { setToggleEditRequest } from '../../store/modules/updateFormData/actions';

import socket from '../../services/websocket';
import api from '../../services/api';

import {
  handleConvertStringToDate,
  handleConvertDateToString,
} from '../../util/handleDateField';

import { ContainerBackgroundModal, ContainerModal } from './styles';

export default function CreateCalled() {
  const dispatch = useDispatch();

  const updateFormData = useSelector((state) => state.updateFormData.data);
  const toggleModal = useSelector((state) => state.updateFormData.edit);

  const [anatelProtocolValue, setAnatelProtocolValue] = useState('');
  const [helpdeskCalledValue, setHelpdeskCalledValue] = useState('');
  const [situationCalledValue, setSituationCalledValue] = useState('');
  const [calledDurationValue, setCalledDurationValue] = useState('');
  const [sectorValue, setSectorValue] = useState('');
  const [observationsValue, setObservationsValue] = useState('');

  function handleCloseForm() {
    dispatch(setToggleEditRequest(false));
  }

  function fieldValidation(fields) {
    const validation = Yup.object().shape({
      anatelProtocol: Yup.string().required(),
      helpdeskCalled: Yup.string().required(),
      situationCalled: Yup.string().required(),
      calledDuration: Yup.date().required(),
      sector: Yup.string().required(),
      observations: Yup.string().required(),
    });

    return validation.isValid(fields);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
      anatelProtocol: anatelProtocolValue,
      helpdeskCalled: helpdeskCalledValue,
      situationCalled: situationCalledValue,
      calledDuration: handleConvertStringToDate(calledDurationValue),
      sector: sectorValue,
      observations: observationsValue,
    };

    const formDataIsValid = await fieldValidation(formData);

    if (!formDataIsValid) {
      return cogoToast.error('Erro de validação, tente novamente!', {
        position: 'top-right',
      });
    }

    try {
      const { name, _id } = updateFormData;

      const updateCalled = await api.put(`/protocol/update/${_id}`, {
        ...formData,
        name,
      });

      if (!updateCalled) {
        return cogoToast.error('Erro ao atualizar os dados, tente novamente!', {
          position: 'top-right',
        });
      }

      dispatch(setToggleEditRequest(false));

      cogoToast.success('Registro salvo com sucesso.', {
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

  useEffect(() => {
    if (updateFormData) {
      setAnatelProtocolValue(updateFormData.anatelProtocol);
      setHelpdeskCalledValue(updateFormData.helpdeskCalled);
      setCalledDurationValue(
        handleConvertDateToString(updateFormData.calledDuration)
      );
      setSituationCalledValue(updateFormData.situationCalled);
      setSectorValue(updateFormData.sector);
      setObservationsValue(updateFormData.observations);
    }
  }, [updateFormData]);

  return (
    <>
      {toggleModal && (
        <ContainerBackgroundModal>
          <ContainerModal>
            <BtnClose size={23} color="#7159c1" onClick={handleCloseForm} />
            <span>Atualizar dados da tratativa</span>
            <form onSubmit={handleFormSubmit}>
              <input
                name="anatelprotocol"
                type="text"
                placeholder="Protocolo Anatel"
                autoComplete="off"
                onChange={(e) => setAnatelProtocolValue(e.target.value)}
                value={anatelProtocolValue}
              />
              <input
                name="helpdeskcalled"
                type="text"
                placeholder="Chamado HelpDesk"
                autoComplete="off"
                onChange={(e) => setHelpdeskCalledValue(e.target.value)}
                value={helpdeskCalledValue}
              />
              <input
                name="situationcalled"
                type="text"
                placeholder="Situação"
                autoComplete="off"
                onChange={(e) => setSituationCalledValue(e.target.value)}
                value={situationCalledValue}
              />
              <input
                name="calledduration"
                type="text"
                placeholder="Prazo de tratativa"
                autoComplete="off"
                onChange={(e) => setCalledDurationValue(e.target.value)}
                value={calledDurationValue}
              />
              <select
                required
                name="sector"
                onChange={(e) => setSectorValue(e.target.value)}
                value={sectorValue}
              >
                <option disabled hidden value="">
                  Setor
                </option>
                <option>Suporte</option>
                <option>Cobrança</option>
                <option>Retenção/Comercial</option>
              </select>
              <textarea
                name="observations"
                placeholder="Observações"
                autoComplete="off"
                onChange={(e) => setObservationsValue(e.target.value)}
                value={observationsValue}
              />

              <button type="submit">Salvar</button>
            </form>
          </ContainerModal>
        </ContainerBackgroundModal>
      )}
    </>
  );
}
