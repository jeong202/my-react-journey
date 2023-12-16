import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
function App() {
  return (
    <div className="App">
      {/* 중간에 들어갈 내용이 없으면 셀프 클로즈 해주는게 보기 좋다 */}
      <Hello />
      <Hello />
      <Hello />
      {/* 컴포넌트는 여러번 재사용이 가능하다 */}
      <Welcome></Welcome>
    </div>
    // app 컴포넌트 안에 헬로와 웰컴 컴포넌트가 들어가 있고 헬로 컴포넌트 안에는 월드 컴포넌트가 들어가 있다
  );
}

export default App;
