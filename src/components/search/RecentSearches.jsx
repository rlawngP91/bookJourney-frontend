// components/RecentSearches.jsx
import React from 'react';
import {
  BookListSection,
  ChipsContainer,
  SectionTitle,
} from '../../pages/search/search.styles';
import { BookChip } from './BookChip';

export const RecentSearches = ({ recentSearches, onClearAll, onRemove }) => {
  if (!recentSearches.length) return null;

  return (
    <BookListSection>
      <SectionTitle>
        <span>최근 검색어</span>
        <button onClick={onClearAll}>모두 삭제</button>
      </SectionTitle>
      <ChipsContainer>
        {recentSearches.map((search, index) => (
          <BookChip
            key={index}
            text={search}
            onRemove={() => onRemove(index)}
          />
        ))}
      </ChipsContainer>
    </BookListSection>
  );
};
