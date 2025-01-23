import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../../assets/clear.svg';
import searchIcon from '../../assets/search2.svg';

const SearchBarWrapper = styled.div`
  padding: 8px 16px;
  height: 39px;
  position: relative;
`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 39px;
  align-items: center;
  gap: 8px;
  border-radius: 19.142px;
  background: rgba(171, 171, 171, 0.12);
`;

const SearchTypeButton = styled.button`
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 12.761px;
  color: #88909b;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  line-height: 14.584px;
  letter-spacing: 0.456px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    background: #eee;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #ababab1f;
  border-radius: 19.142px;
  outline: none;
  font-family: Pretendard;
  font-size: 14px;
  padding: 0 80px 0 8px; // 오른쪽 패딩 증가
`;

const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 12px; // 아이콘 사이 간격 증가
`;

const DeleteIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;

  img {
    width: 8px;
    height: 8px;
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const SearchBar = ({
  value,
  onChange,
  onClear,
  searchType,
  onTypeClick,
}) => {
  return (
    <SearchBarWrapper>
      <SearchInput>
        <SearchTypeButton onClick={onTypeClick}>{searchType}</SearchTypeButton>
        <StyledInput
          type="text"
          placeholder={`${searchType} 검색`}
          value={value}
          onChange={onChange}
        />
        <IconContainer>
          {value && (
            <DeleteIconWrapper>
              <img src={deleteIcon} alt="clear" onClick={onClear} />
            </DeleteIconWrapper>
          )}
          <SearchIconWrapper>
            <img src={searchIcon} alt="search" />
          </SearchIconWrapper>
        </IconContainer>
      </SearchInput>
    </SearchBarWrapper>
  );
};
