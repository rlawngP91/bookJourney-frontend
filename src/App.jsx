import React from 'react';
import Router from './routers/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: url("./Pretendard/Pretendard-Medium.otf") format("opentype");
  }
  body {
    font-family: "Pretendard";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
