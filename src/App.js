import "./App.css";
import Hello from "./component/Hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      {/* 동일한 컴포넌트여도 state는 각각 따로 관리된다. 다른 state에 영향을 미치지 않는다. */}
    </div>
  );
}

export default App;
