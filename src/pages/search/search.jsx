import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../../components/search/SearchHeader';
import Footer from '../../components/commons/Footer/Footer';
import { SearchBar } from '../../components/search/SearchBar';
import { SearchResults } from '../../components/search/searchResults';
import { RecentSearches } from '../../components/search/RecentSearches';
import BookTypePopup from '../../components/search/BookTypePopup';
import { getFilteredResults } from '../../utils/search';
import { mockBooks, mockRooms } from '../../apis/mockData';
import FilterPopup from '../../components/search/FilterPopup';
import {
  SearchWrapper,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
  ListTypeContainer,
  ListTypeButton,
} from './search.styles';

export default function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchType, setSearchType] = useState('책 제목');
  const [recentSearches, setRecentSearches] = useState([
    '해리포터',
    '해리포터',
    '해리포터',
    '해리포터',
    '해리포터',
    '해리포터',
  ]);

  const [listType, setListType] = useState('책 목록');
  const [books, setBooks] = useState(mockBooks);
  const [rooms, setRooms] = useState(mockRooms);

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filters, setFilters] = useState({
    category: '소설/시/희곡',
    deadline: {
      start: null,
      end: null,
    },
    period: {
      start: null,
      end: null,
    },
  });

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleTypeSelect = (typeId) => {
    const typeLabels = {
      book: '책 제목',
      author: '작가 이름',
      room: '방 이름',
    };
    setSearchType(typeLabels[typeId]);
    setShowPopup(false);
  };

  const removeRecentSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setRecentSearches([]);
  };

  const handleFilterApply = (newFilters) => {
    setFilters(newFilters);

    // 검색어와 다른 필터 적용
    const { filteredBooks, filteredRooms } = getFilteredResults(
      searchQuery,
      searchType,
      books,
      rooms,
      newFilters
    );

    setBooks(filteredBooks);
    setRooms(filteredRooms);
  };

  return (
    <SearchWrapper>
      <HeaderContainer>
        <SearchHeader
          onBackClick={() => navigate(-1)}
          onSettingsClick={() => setShowFilterPopup(true)}
        />
      </HeaderContainer>

      <ContentContainer>
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
          onClear={handleClearSearch}
          searchType={searchType}
          onTypeClick={() => setShowPopup(true)}
        />

        {!searchQuery && (
          <RecentSearches
            recentSearches={recentSearches}
            onClearAll={handleClearAll}
            onRemove={removeRecentSearch}
          />
        )}

        <ListTypeContainer searchQuery={searchQuery}>
          <ListTypeButton
            onClick={() => setListType('책 목록')}
            isSelected={listType === '책 목록'}
          >
            책 목록
          </ListTypeButton>
          <ListTypeButton
            onClick={() => setListType('같이읽기 목록')}
            isSelected={listType === '같이읽기 목록'}
          >
            같이읽기 목록
          </ListTypeButton>
        </ListTypeContainer>

        <SearchResults
          searchQuery={searchQuery}
          searchType={searchType}
          filteredBooks={books}
          filteredRooms={rooms}
          listType={listType}
        />
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>

      {showFilterPopup && (
        <FilterPopup
          onClose={() => setShowFilterPopup(false)}
          onApply={handleFilterApply}
          currentFilters={filters}
        />
      )}

      {showPopup && (
        <BookTypePopup
          onSelect={handleTypeSelect}
          onClose={() => setShowPopup(false)}
          currentType={searchType}
        />
      )}
    </SearchWrapper>
  );
}
