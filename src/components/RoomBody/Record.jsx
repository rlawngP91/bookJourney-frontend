import React, { useState } from 'react';
import hamburgermenu from '../../assets/hamburgermenu.svg';
import reply from '../../assets/reply.svg';
import good from '../../assets/good.svg';
import alreadygood from '../../assets/alreadygood.svg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import styled from 'styled-components';

export const Review = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #f6f7f9;
  padding-bottom: 20px;

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      .name {
        color: #000;
        font-family: Pretendard;
        font-size: 12.574px;
        font-style: normal;
        font-weight: 500;
        line-height: 17.963px; /* 142.857% */
      }

      .time {
        color: #939393;
        font-family: Pretendard;
        font-size: 11.158px;
        font-style: normal;
        font-weight: 400;
        line-height: 17.963px; /* 160.988% */
      }
    }

    img {
      width: 26px;
      height: 26px;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

    .page {
      color: #6aa5f8;
      text-align: center;
      font-family: Pretendard;
      font-size: 10.778px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.37px; /* 133.333% */
      letter-spacing: 0.359px;
    }

    .content {
      color: #000;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 17.963px; /* 149.691% */
      width: 80%;
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;
    gap: 7px;
    align-items: center;
    justify-content: end;

    color: #000;
    font-family: Roboto;
    font-size: 10.012px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.402px; /* 153.846% */
  }
`;

export default function Record({ record }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 열림 상태 관리

  return (
    <Review>
      <div className="head">
        <div className="main">
          <img src={record.imageUrl} />
          <div className="name">{record.nickName}</div>
          <div className="time">{record.createdAt}</div>
        </div>
        <img src={hamburgermenu} onClick={() => setIsMenuOpen(true)} />
        {isMenuOpen && <HamburgerMenu onClose={() => setIsMenuOpen(false)} />}
      </div>
      <div className="body">
        <div className="page">
          {record.recordPage ? `${record.recordPage}p` : ''}
        </div>
        <div className="content">{record.content}</div>
      </div>
      <div className="bottom">
        <img src={reply} />
        <div>{record.commentCount}</div>
        <img src={record.like ? alreadygood : good} alt="좋아요" />
        <div>{record.recordLikeCount}</div>
      </div>
    </Review>
  );
}
