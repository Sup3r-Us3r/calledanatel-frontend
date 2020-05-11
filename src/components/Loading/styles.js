import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background-color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const LoadingAnimation = styled.div`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #888;
  -webkit-animation: ${spin} 2s linear infinite;
  animation: ${spin} 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #999;
    -webkit-animation: ${spin} 3s linear infinite;
    animation: ${spin} 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #777;
    -webkit-animation: ${spin} 1.5s linear infinite;
    animation: ${spin} 1.5s linear infinite;
  }
`;
