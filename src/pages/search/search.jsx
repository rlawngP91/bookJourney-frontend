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
import logoIcon from '../../assets/loadingbook.svg';

import { recentsearchAPI } from '../../apis/recentsearchAPI';
import {
  fetchBookSearchResults,
  fetchRoomSearchResults,
} from '../../apis/searchAPI';
import {
  SearchWrapper,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
  ListTypeContainer,
  ListTypeButton,
  LoadingContent,
} from './search.styles';

const SEARCH_TYPE_KEY = 'searchType';
const DEFAULT_SEARCH_TYPE = '책 제목';

export default function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchType, setSearchType] = useState(() => {
    // localStorage에서 저장된 searchType or 없으면 기본값 사용
    return localStorage.getItem(SEARCH_TYPE_KEY) || DEFAULT_SEARCH_TYPE;
  });
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const [bookPage, setBookPage] = useState(0);
  const [bookHasMore, setBookHasMore] = useState(true);
  const [roomPage, setRoomPage] = useState(0);
  const [roomHasMore, setRoomHasMore] = useState(true);
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
    if (e.target.value == '') {
      setIsSearchExecuted(false);
    }
  };

  // searchBar 돋보기 Button
  const handleSearch = async (directQuery, newListType) => {
    const queryToUse = directQuery || searchQuery;
    const typeToUse = newListType || listType;

    if (!queryToUse.trim()) return;

    setIsSearchExecuted(true);

    try {
      setIsDataLoading(true);

      if (typeToUse === '책 목록') {
        setBookPage(0);
        setBookHasMore(true);
        const booksHasNext = await fetchBookSearchResults({
          searchQuery: queryToUse,
          searchType,
          filters: appliedFilters,
          setBooks,
          page: 0,
          isLoadingMore: false,
        });
        setBookHasMore(booksHasNext);
      } else {
        setRoomPage(0);
        setRoomHasMore(true);
        const roomsHasNext = await fetchRoomSearchResults({
          searchQuery: queryToUse,
          searchType,
          filters: appliedFilters,
          setRooms,
          page: 0,
          isLoadingMore: false,
        });
        setRoomHasMore(roomsHasNext);
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  // searchBar X button
  const handleClearSearch = () => {
    setSearchQuery('');
    setBooks([]);
    setRooms([]);
    setIsSearchExecuted(false);
    fetchRecentSearches();
  };

  useEffect(() => {
    localStorage.setItem(SEARCH_TYPE_KEY, searchType);
  }, [searchType]);

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
      handleSearch();
    }
  };

  const handleChipClick = async (text) => {
    setSearchQuery(text);
    handleSearch(text);
  };

  const fetchRecentSearches = async () => {
    try {
      setIsPageLoading(true);
      const data = await recentsearchAPI.getRecentSearches();
      setRecentSearches(data);
    } catch (error) {
      console.error('최근 검색어 조회 실패:', error);
    } finally {
      setIsPageLoading(false);
    }
  };

  // 최근 검색어 목록 조회
  useEffect(() => {
    fetchRecentSearches();
  }, []);

  const removeRecentSearch = async (searchId) => {
    try {
      setIsDataLoading(true);
      await recentsearchAPI.removeRecentSearch(searchId);
      setRecentSearches(recentSearches.filter((item) => item.id !== searchId));
    } catch (error) {
      console.error('최근 검색어 삭제 실패:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const handleClearAll = async () => {
    // 최근 검색어 전체 삭제
    try {
      setIsDataLoading(true);
      await recentsearchAPI.clearAllRecentSearches();
      setRecentSearches([]);
    } catch (error) {
      console.error('전체 검색어 삭제 실패:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (isLoadingMore || !isSearchExecuted) return;

    // listType에 따라 hasMore 체크
    const currentHasMore = listType === '책 목록' ? bookHasMore : roomHasMore;
    if (!currentHasMore) return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop - clientHeight < 100) {
      setIsLoadingMore(true);
      // listType에 따라 적절한 페이지 증가
      if (listType === '책 목록') {
        setBookPage((prev) => prev + 1);
      } else {
        setRoomPage((prev) => prev + 1);
      }
    }
  }, [isLoadingMore, bookHasMore, roomHasMore, listType, isSearchExecuted]);
  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // 페이지가 변경될 때마다 추가 데이터 로드
  useEffect(() => {
    const loadMoreData = async () => {
      if (isLoadingMore) {
        try {
          if (listType === '책 목록' && bookPage > 0) {
            const hasNextPage = await fetchBookSearchResults({
              searchQuery,
              searchType,
              filters: appliedFilters,
              setBooks,
              page: bookPage,
              isLoadingMore: true,
            });
            setBookHasMore(hasNextPage);
          } else if (listType === '같이읽기 목록' && roomPage > 0) {
            const hasNextPage = await fetchRoomSearchResults({
              searchQuery,
              searchType,
              filters: appliedFilters,
              setRooms,
              page: roomPage,
              isLoadingMore: true,
            });
            setRoomHasMore(hasNextPage);
          }
        } catch (error) {
          console.error('Failed to load more data:', error);
        } finally {
          setIsLoadingMore(false);
        }
      }
    };

    loadMoreData();
  }, [bookPage, roomPage, listType]);

  useEffect(() => {
    // listType이 변경될 때마다 스크롤 위치와 로딩 상태 초기화
    window.scrollTo(0, 0);
    setIsLoadingMore(false);
  }, [listType]);

  if (isPageLoading) {
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
                onClick={() => {
                  setListType('책 목록');
                  handleSearch(searchQuery, '책 목록');
                }}
                $isSelected={listType === '책 목록'}
              >
                책 목록
              </ListTypeButton>
              <ListTypeButton
                onClick={() => {
                  setListType('같이읽기 목록');
                  handleSearch(searchQuery, '같이읽기 목록');
                }}
                $isSelected={listType === '같이읽기 목록'}
              >
                같이읽기 목록
              </ListTypeButton>
            </ListTypeContainer>

            {isDataLoading && (
              <LoadingContent $delay={0}>
                <img src={logoIcon} />
              </LoadingContent>
            )}

            {!isDataLoading && (
              <SearchResults
                $searchQuery={searchQuery}
                $searchType={searchType}
                filteredBooks={books}
                filteredRooms={rooms}
                listType={listType}
              />
            )}
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
