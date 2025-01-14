import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 393px;
    height: 852px;
    background-color: #F6F7F9;

    .logo {
        position: absolute;
        top: 285px;
        left: 118px;
        width: 158px;
        height: 158px;
    }

    .title {
        position: absolute;
        top: 470px;
        left: 155px;
    }

    .user-hello {
        position: absolute;
        top: 531px;
        left: 114px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 200;
        line-height: var(--Label-Medium-Line-Height, 16px); /* 100% */
        letter-spacing: var(--Label-Medium-Tracking, 0.5px);
    }

    .blue-btn {
        position: absolute;
        top: 628px;
        left: 19px;
    }

`