import styled from "styled-components";

export const LoginContainer = styled.div`
    position: relative;
    width: 393px;
    height: 852px;
    background-color: #F6F7F9;

    .title {
        position: relative;
        padding-top: 114px;
        padding-left: 155px;
        padding-bottom: 160px;
    }

    .input-field {
        position: relative;
        left: 25px;
    }

    .find-password {
        position: absolute;
        left: 20px;
        margin-top: 34px;
        padding: 0;
        width: auto;
        height: 20px;
        background: none; /* 버튼 배경 제거 */
        border: none; /* 버튼 테두리 제거 */
        color: var(--sds-color-text-default-default);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        text-decoration: underline; /* 밑줄 추가 */
        outline: none;
    }

    .question {
        position: absolute;
        margin-top: 134px;
        left: 106px;
        display: inline-block;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: var(--Label-Medium-Line-Height, 16px); /* 114.286% */
        letter-spacing: var(--Label-Medium-Tracking, 0.5px);

        span {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    .agree {
        left: 33px;
        position: absolute;
        width: 342px;
        height: 16px;
        margin-top: 178px;
        flex-shrink: 0;
        color: #88909B;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: var(--Label-Medium-Line-Height, 16px); /* 133.333% */
        letter-spacing: var(--Label-Medium-Tracking, 0.5px);

        span {
            color: #006AFF;
            cursor: pointer;
        }
    }
`