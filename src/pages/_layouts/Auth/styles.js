import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

export const floatBackground = keyframes`
  from {
    transform: translate3d(0, -6px, 0);
  }
  to {
    transform: translate3d(0, 6px, 0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  section:nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    width: 65%;
    height: 100vh;

    @media (max-width: 750px) {
      width: 100%;
    }

    div {
      width: 100%;

      h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 70px;
        color: #7159c1;
        font-weight: 900;
        margin-bottom: 10px;
        text-transform: uppercase;

        @media (max-width: 750px) {
          font-size: 40px;
        }
      }

      p {
        color: #6b7280;
        font-size: 23px;
      }
    }

    form {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: 750px) {
        width: 100%;
      }

      input {
        font-size: 15px;
        width: 100%;
        background: #fff;
        padding: 13px;
        border-radius: 5px;
        color: #6b7280;
        border: 2px solid ${lighten(0.4, '#6b7280')};
        transition: border 0.5s;

        & + input {
          margin-top: 10px;
        }

        &:focus {
          border: 2px solid #7159c1;
        }

        &::placeholder {
          font-size: 13px;
          font-weight: bold;
          color: #6b7280;
        }
      }

      button {
        margin-top: 20px;
        padding: 10px 40px;
        background: #7159c1;
        color: #fff;
        font-weight: bold;
        border-radius: 20px;
        transition: background 0.5s;

        &:hover {
          cursor: pointer;
          background: ${darken(0.05, '#7159c1')};
        }
      }
    }

    a {
      width: 100%;
      color: #7159c1;

      &:hover {
        cursor: pointer;
        color: ${darken(0.05, '#7159c1')};
      }
    }
  }

  section:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    background: #7159c1;
    height: 100vh;
    user-select: none;

    @media (max-width: 750px) {
      display: none;
    }

    img {
      width: 90%;
      pointer-events: none;
      animation: ${floatBackground} 2s infinite alternate ease-in-out;
    }
  }
`;
