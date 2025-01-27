import bookcover from '../assets/bookexample.svg';
import bookcover2 from '../assets/dummyBook2.svg';
export const mockRoomsNotRead = [
  {
    id: 1,
    book: '이기적 유전자',
    author: '리처드 도킨스',
    title: 'testroom',
    people: '혼자',
    recentEdit: '2시간',
    progress: '30',
    coverImage: bookcover2,
  },
  {
    id: 2,
    book: '이기적 유전자',
    author: '리처드 도킨스',
    title: 'testroom',
    people: '같이',
    recentEdit: '6시간',
    progress: '90',
    coverImage: bookcover2,
  },
  {
    id: 3,
    book: '밤의 여행자들',
    author: '윤고은',
    title: 'notlocked',
    people: '같이',
    recentEdit: '24시간',
    progress: '10',
    coverImage: bookcover,
  },
  {
    id: 4,
    book: '밤의 여행자들',
    author: '윤고은',
    title: 'lockedroom',
    people: '같이',
    recentEdit: '12시간',
    progress: '60',
    coverImage: bookcover,
  },
];
