import React from 'react';
import Router from './routers/Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Noto_sans";
    font-weight: 400;
    src: url("./fonts/NotoSansKR-Regular.otf") format("opentype");
  }
  @font-face {
    font-family: "Noto_sans";
    font-weight: 700;
    src: url("./fonts/NotoSansKR-Bold.otf") format("opentype");
  }
  body {
    font-family: "Noto_sans", sans-serif;
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
