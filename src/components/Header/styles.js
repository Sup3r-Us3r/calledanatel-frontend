import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  div {
    display: flex;

    img {
      height: 25px;
      pointer-events: none;
      user-select: none;
      margin-right: 10px;
    }

    header {
      font-size: 25px;
      font-weight: bold;
      color: #333;
      text-transform: uppercase;

      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 65px;
  }
`;
