import "./App.css";
// HMR(hot module replacement) : App.js 작성수정조정한 코드는 브라우저에 바로 반영이 된다
function App() {
  const name = "테스터";
  const naver = {
    //객체를 변수에 할당
    name: "네이버",
    url: "https://www.naver.com/",
  };
  return (
    <div className="App">
      {/* class가 자바스크립트 예약어라서 className으로 적어준다 */}
      {/* style는 객체로 전달해야힌다,카멜표기법이 사용된다 */}
      <h1
        style={{
          color: "red",
          backgroundColor: "#f0f",
        }}
      >
        {/* 변수는 중괄호 안에 적는다 */}
        안녕하세요.{name} {2 + 9}살입니다.
      </h1>
      {/* 객체도 불러올 수 있다 */}
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
