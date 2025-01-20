import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    left: 20px;
    padding-top: 2.1px;
    width: 353px;
    height: 42px;
    border-radius: 5px;
    background-color: ${(props) => (props.disabled ? '#A3A3A3' : '#6AA5F8')};
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; /* 비활성화 상태에서는 클릭 금지 */
    p {
        margin: 0;
        margin-top: 3px;
        width: 146.111px;
        height: 16px;
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-family: var(--Label-Medium-Font, Roboto);
        font-size: 14px;
        line-height: 14px;
        font-style: normal;
        font-weight: 500;
    }
`