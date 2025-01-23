import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 156px;
  width: 393px;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 9px;
    text-align: center;
    padding: 88px 20px 0px 20px;
    box-sizing: border-box;

    .bookname {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: var(--Label-Small-Line-Height, 16px); /* 106.667% */
      letter-spacing: var(--Label-Small-Tracking, 0.5px);
    }

    img {
      width: 14px;
      height: 14px;
    }
  }

  .writer {
    padding-top: 9px;
    padding-bottom: 27px;
    color: #757373;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;

export const Popup = styled.div`
  .message {
  }

  .buttons {
    button {
    }

    .cancel {
    }

    .delete {
    }
  }
`;
