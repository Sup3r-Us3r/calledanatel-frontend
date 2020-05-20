import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const downModal = keyframes`
  from {
    transform: translate3d(0, -900px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

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

export const ContainerBackgroundModal = styled.div`
  z-index: 1000;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
`;

export const ContainerModal = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  max-height: 540px;
  background: #fff;
  border-radius: 7px;
  border-top: 3px solid #7159c1;
  border-bottom: 3px solid #7159c1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: ${downModal} 1s ease-in-out;

  @media (max-width: 330px) {
    max-height: 100%;
    max-width: 100%;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px 5px 0 0;

    &:hover {
      cursor: pointer;
      fill: ${darken(0.06, '#7159c1')};
    }
  }

  span {
    padding: 13px 0;
    width: 100%;
    text-align: center;
    color: #7159c1;
    font-weight: bold;
    font-size: 23px;
  }

  form {
    width: 93%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input,
    select {
      padding: 10px;
      width: 100%;
      margin-bottom: 10px;
      border-radius: 5px;
      background: ${darken(0.01, '#fafafa')};
      color: #6b7280;
      border-bottom: 2px solid transparent;
      box-shadow: 2px 2px 8px #d4d5d5, -2px -2px 8px #ffffff;
      transition: border 0.3s;

      &::placeholder {
        font-weight: bold;
      }

      &:focus {
        border-bottom: 2px solid #d4d5d5;
      }
    }

    select {
      font-size: 12px;
      background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position-x: 100%;
      background-position-y: 5px;

      [disabled] {
        font-size: 12px;
        font-weight: bold;
      }

      &:invalid {
        font-size: 12px;
        font-weight: bold;
      }

      option {
        font-size: 13.5px;
      }
    }

    textarea {
      padding: 10px;
      width: 100%;
      height: 180px;
      resize: none;
      overflow: auto;
      border-radius: 5px;
      background: ${darken(0.01, '#fafafa')};
      color: #6b7280;
      border-bottom: 2px solid transparent;
      box-shadow: 2px 2px 8px #d4d5d5, -2px -2px 8px #ffffff;
      transition: border 0.3s;

      &::placeholder {
        font-weight: bold;
      }

      &:focus {
        border-bottom: 2px solid #d4d5d5;
      }
    }

    button {
      width: 100%;
      margin: 10px 0;
      padding: 13px 15px;
      font-weight: bold;
      color: #fff;
      background: #7159c1;
      border-radius: 50px;
      transition: background 0.5s;

      &:hover {
        cursor: pointer;
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
`;
