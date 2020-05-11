import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerButton = styled.div`
  background: #7159c1;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.6s;

  &:hover {
    cursor: pointer;
    background: ${darken(0.05, '#7159c1')};
  }
`;

export const LogoutButton = styled.button`
  background: #ff0000;
`;
