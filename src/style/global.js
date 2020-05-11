import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: #eee;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, textarea, section, option {
    font-family: 'Roboto', sans-serif;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* COGOTOAST CUSTOM STYLES */
  /** COLORS
    background: #7159c1;
    background: #3498db;
    background: #F23838;
    background: #FEE703;
  */
  /* .ct-toast-success {} */
`;
