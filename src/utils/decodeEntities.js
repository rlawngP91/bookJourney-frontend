// ✅ HTML 엔터티를 디코딩하는 함수
const decodeEntities = (text) => {
  if (!text) return '정보 없음'; // 데이터가 없으면 기본값 반환
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

export default decodeEntities;
