import styled from 'styled-components';

export const Container = styled.div`
  .overlay {
    position: absolute;
    width: 393px;
    height: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.42);
  }

  .content {
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 393px;
    height: 264px;
    z-index: 1001;
    border-radius: 9px 9px 0 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    & > *:last-child {
      border-radius: 9px !important;
    }
  }

  .profile-choice-text {
    width: 100%;
    text-align: center;
    color: #000;
    font-style: normal;
    font-weight: 600;
    margin-top: 25px;
  }

  .profile-img-container {
    margin-top: 47.64px;
    margin-left: 25px;
    display: flex;
    gap: 11.1px;

    img {
      cursor: pointer;
      width: 59.72px;
      height: 59.72px;
    }
  }

  .save {
    position: absolute;
    left: 21px;
    bottom: 25px;
  }
`;
