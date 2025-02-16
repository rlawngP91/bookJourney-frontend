import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return <Spinner />;
};

export default LoadingSpinner;
