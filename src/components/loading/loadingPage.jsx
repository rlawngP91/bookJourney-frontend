import React from 'react';
import loadinglogo from './loadinglogo.svg';
import loadingbook from './loading1.svg';
import loadingpencil from './loading2.svg';
import loadingcheck from './loading3.svg';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #74b9ff;
  position: relative;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const LoadingLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingItem = styled.img`
  position: absolute;
  animation: ${float} 2s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s;
`;

const LoadingItem1 = styled(LoadingItem)`
  width: 58.865px;
  height: 63.284px;
  left: 80%;
`;

const LoadingItem2 = styled(LoadingItem)`
  width: 84.847px;
  height: 65.025px;
  left: 60%;
  top: 100%;
`;

const LoadingItem3 = styled(LoadingItem)`
  width: 60.353px;
  height: 63.8px;
  left: -20%;
  top: 60%;
`;

const loadingPage = () => {
  return (
    <LoadingContainer>
      <LogoContainer>
        <LoadingLogo src={loadinglogo} alt="Loading Logo" />
        <LoadingItem1 src={loadingbook} alt="Loading Item 1" $delay={0} />
        <LoadingItem2 src={loadingpencil} alt="Loading Item 2" $delay={0.2} />
        <LoadingItem3 src={loadingcheck} alt="Loading Item 3" $delay={0.6} />
      </LogoContainer>
    </LoadingContainer>
  );
};

export default loadingPage;
