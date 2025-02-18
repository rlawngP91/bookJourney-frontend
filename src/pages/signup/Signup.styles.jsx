import styled from 'styled-components';

export const SignupContainer = styled.div`
  position: relative;
  width: 393px;
  height: 607px;
  background-color: #f6f7f9;
  padding-top: 245px;
  .title {
    position: absolute;
    top: 97px;
    left: 155px;
    z-index: 10;
  }

  .alert-text {
    margin: 0;
    height: 16px;
    color: #fd7472;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
  }

  .duplicate-check,
  .email-check {
    color: #a3a3a3;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 145.455% */
    letter-spacing: 0.5px;
    cursor: pointer;
    align-self: flex-end; /* 오른쪽 끝에 위치하게 설정 */
  }

  .duplicate-check {
    position: absolute;
    z-index: 100;
    top: 319px;
    left: 307px;
  }

  .email-check {
    position: absolute;
    z-index: 100;
    top: 259px;
    left: 295px;
  }

  .verfication-result-message {
    position: absolute;
    top: 356px;
    left: 40px;
    color: #fd7472;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;

    margin: 0;
  }

  .pwd-result-msg {
    position: absolute;
    top: 530px;
    left: 40px;
    margin: 0;
    color: #fd7472;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
  }

  .password-input {
    position: absolute;
    margin-top: 60.24px;
  }

  .password-check {
    position: absolute;
    margin-top: 119.48px;
  }

  .eye-input {
    position: absolute;
    top: 435px;
    left: 325px;
    cursor: pointer;
  }

  .eye-check {
    position: absolute;
    top: 494px;
    left: 325px;
    cursor: pointer;
  }

  .start-btn {
    position: absolute;
    top: 656px;
    left: 20px;
  }

  .pwd-error-msg {
    position: absolute;
    top: 532px;
    left: 40px;
    width: 160px;
    margin: 0;
    margin: 0;
    color: #fd7472;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    white-space: pre-line;
  }

  .back-btn {
    position: absolute;
    cursor: pointer;
    top: 51px;
    left: 35px;
  }
`;
