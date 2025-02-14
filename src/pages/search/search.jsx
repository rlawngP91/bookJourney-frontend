import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import Footer from '../../components/commons/Footer/Footer';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { RecentSearches } from './RecentSearches';

import BookTypePopup from './BookTypePopup';
import FilterPopup from './FilterPopup';
import LoadingPage from '../../components/loading/loadingPage';

import { recentsearchAPI } from '../../apis/recentsearchAPI';
import { searchAPI } from '../../apis/searchAPI';
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
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);
  const [isLoading, setIsLoaing] = useState(false);

  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [listType, setListType] = useState('책 목록');
  const [books, setBooks] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    category: null,
    deadline: {
      start: null,
      end: null,
    },
    period: {
      start: null,
      end: null,
    },
    recordcnt: null,
  });

  // 검색어 입력만
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // searchBar 돋보기 Button
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearchExecuted(true);
    setPage(0);
    setHasMore(true);

    try {
      setIsLoaing(true);
      const hasNextPage = await searchAPI.fetchSearchResults({
        searchQuery,
        searchType,
        filters: appliedFilters,
        setBooks,
        setRooms,
        page: 0,
        isLoadingMore: false,
      });
      setHasMore(hasNextPage);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoaing(false);
    }
  };

  // searchBar X button
  const handleClearSearch = () => {
    setSearchQuery('');
    setBooks([]);
    setRooms([]);
    setIsSearchExecuted(false);
  };

  // searchType
  const handleTypeSelect = (typeId) => {
    const typeLabels = {
      book: '책 제목',
      author: '작가 이름',
      room: '방 이름',
    };
    setSearchType(typeLabels[typeId]);
    setShowPopup(false);
  };

  // search Filter 적용
  const handleFilterApply = async (newFilters) => {
    setAppliedFilters(newFilters);
    setShowFilterPopup(false);

    if (searchQuery) {
      try {
        setIsLoaing(true);
        await searchAPI.fetchSearchResults({
          searchQuery,
          searchType,
          filters: newFilters,
          setBooks,
          setRooms,
        });
      } catch (error) {
        console.error('Filter apply failed:', error);
      } finally {
        setIsLoaing(false);
      }
    }
  };

  const handleChipClick = async (text) => {
    setSearchQuery(text);
    try {
      setIsLoaing(true);
      await searchAPI.fetchSearchResults({
        searchQuery: text,
        searchType,
        filters: appliedFilters,
        setBooks,
        setRooms,
      });
      setIsSearchExecuted(true);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoaing(false);
    }
  };

  // 최근 검색어 목록 조회
  useEffect(() => {
    const fetchRecentSearches = async () => {
      try {
        setIsLoaing(true);
        const data = await recentsearchAPI.getRecentSearches();
        setRecentSearches(data);
      } catch (error) {
        console.error('최근 검색어 조회 실패:', error);
      } finally {
        setIsLoaing(false);
      }
    };

    fetchRecentSearches();
  }, []);

  const removeRecentSearch = async (searchId) => {
    try {
      setIsLoaing(true);
      await recentsearchAPI.removeRecentSearch(searchId);
      setRecentSearches(recentSearches.filter((item) => item.id !== searchId));
    } catch (error) {
      console.error('최근 검색어 삭제 실패:', error);
    } finally {
      setIsLoaing(false);
    }
  };

  const handleClearAll = async () => {
    // 최근 검색어 전체 삭제
    try {
      setIsLoaing(true);
      await recentsearchAPI.clearAllRecentSearches();
      setRecentSearches([]);
    } catch (error) {
      console.error('전체 검색어 삭제 실패:', error);
    } finally {
      setIsLoaing(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (isLoadingMore || !hasMore || !isSearchExecuted) return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight < 100) {
      setIsLoadingMore(true);
      setPage((prev) => prev + 1);
    }
  }, [isLoadingMore, hasMore, isSearchExecuted]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 페이지가 변경될 때마다 추가 데이터 로드
  useEffect(() => {
    const loadMoreData = async () => {
      if (page > 0 && hasMore && isLoadingMore) {
        try {
          const hasNextPage = await searchAPI.fetchSearchResults({
            searchQuery,
            searchType,
            filters: appliedFilters,
            setBooks,
            setRooms,
            page,
            isLoadingMore: true,
          });
          setHasMore(hasNextPage);
        } catch (error) {
          console.error('Failed to load more data:', error);
        } finally {
          setIsLoadingMore(false);
        }
      }
    };

    loadMoreData();
  }, [page]);

  if (isLoading) {
    return <LoadingPage />;
  }

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
          onChange={handleSearchChange}
          onClear={handleClearSearch}
          searchType={searchType}
          onTypeClick={() => setShowPopup(true)}
          onSearch={handleSearch}
        />

        {!isSearchExecuted && (
          <RecentSearches
            recentSearches={recentSearches.map((search) => search.text)}
            onClearAll={handleClearAll}
            onRemove={(id) => removeRecentSearch(recentSearches[id].id)} // index를 사용하여 해당 아이템의 id에 접근
            onChipClick={handleChipClick}
          />
        )}

        {isSearchExecuted && (
          <>
            <ListTypeContainer $searchQuery={searchQuery}>
              <ListTypeButton
                onClick={() => setListType('책 목록')}
                $isSelected={listType === '책 목록'}
              >
                책 목록
              </ListTypeButton>
              <ListTypeButton
                onClick={() => setListType('같이읽기 목록')}
                $isSelected={listType === '같이읽기 목록'}
              >
                같이읽기 목록
              </ListTypeButton>
            </ListTypeContainer>

            <SearchResults
              $searchQuery={searchQuery}
              $searchType={searchType}
              filteredBooks={books}
              filteredRooms={rooms}
              listType={listType}
            />
          </>
        )}
      </ContentContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>

      {showFilterPopup && (
        <FilterPopup
          onClose={() => {
            setShowFilterPopup(false);
          }}
          onApply={handleFilterApply}
          $currentFilters={appliedFilters}
        />
      )}

      {showPopup && (
        <BookTypePopup
          onSelect={handleTypeSelect}
          onClose={() => setShowPopup(false)}
          $currentType={searchType}
        />
      )}
    </SearchWrapper>
  );
}
