import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-top: 10px;
    color: #6b7280;
    font-size: 15px;
    font-weight: bold;
  }

  nav {
    ul {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;

      li {
        & + li {
          margin-left: 7px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  background: ${({ active }) => (active === 'on' ? '#7159c1' : '#f9fafb')};
  color: ${({ active }) => (active === 'on' ? '#fff' : '#7159c1')};
  box-shadow: 3px 3px 6px #d4d5d5, -3px -3px 6px #ffffff;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background: ${({ active }) =>
      active === 'on' ? darken(0.05, '#7159c1') : darken(0.02, '#f9fafb')};
  }
`;
