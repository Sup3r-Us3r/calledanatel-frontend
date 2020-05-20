import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

function Pagination({ currentPage, calledsPerPage, totalCalleds, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCalleds / calledsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <span>Total de chamados: {totalCalleds}</span>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              {currentPage === number ? (
                <Button
                  type="button"
                  onClick={() => paginate(number)}
                  active="on"
                >
                  {number}
                </Button>
              ) : (
                <Button type="button" onClick={() => paginate(number)}>
                  {number}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.number]).isRequired,
  calledsPerPage: PropTypes.oneOfType([PropTypes.number]).isRequired,
  totalCalleds: PropTypes.oneOfType([PropTypes.number]).isRequired,
  paginate: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

export default memo(Pagination);
