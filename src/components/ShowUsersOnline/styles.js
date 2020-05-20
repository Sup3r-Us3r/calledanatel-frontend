import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerButton = styled.div`
  position: relative;
  background: #7159c1;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.6s;

  &:hover {
    cursor: pointer;
    background: ${darken(0.05, '#7159c1')};
  }

  svg:nth-child(2) {
    position: absolute;
    bottom: 0;
    margin-bottom: -20px;

    &:hover {
      cursor: default;
    }
  }
`;

export const Users = styled.nav`
  position: absolute;
  z-index: 2000;
  top: 74px;
  right: 20px;

  ul {
    user-select: none;
    margin-top: -5px;
    overflow: auto;
    min-width: 180px;
    max-height: 300px;
    max-width: 250px;
    background: #f9fafb;
    border: 5px solid #f9fafb;
    border-left: 5px solid ${darken(0.02, '#f9fafb')};
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      height: 9px;
      width: 9px;
    }

    &::-webkit-scrollbar-track {
      background: #f9fafb;
    }

    &::-webkit-scrollbar-thumb {
      background: ${darken(0.04, '#eef2f7')};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${darken(0.03, '#edf2f7')};
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 5px 5px 5px 8px;
      width: 100%;
      transition: background 0.1s;

      &:hover {
        background: #edf2f7;
        border-radius: 5px;
      }

      span {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
        height: 33px;
        width: 33px;
        background: #7159c1;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        border-radius: 50%;

        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          height: 7px;
          width: 7px;
          background: #27e686;
          border: 2px solid #7159c1;
          border-radius: 50%;
        }
      }

      p {
        font-size: 12px;
        color: #7159c1;
        letter-spacing: 0.3px;
        font-weight: bold;
      }
    }
  }
`;
