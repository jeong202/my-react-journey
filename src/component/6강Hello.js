export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showAge(age) {
    console.log(age);
  }
  // function showText(e) {
  //   // event 객체를 받고
  //   console.log(e.target.value);
  //   // target은 input태그 value는 "input의 value"
  // }
  // 이벤트 핸들러에 전달되는 e나 event는 이 브라우저에서 생성된 이벤트 객체를 가리키는 것입니다. 이 객체에는 해당 이벤트에 대한 다양한 정보가 포함되어 있습니다. 이벤트 객체는 브라우저가 제공하는 것으로, 사용자의 상호작용에 대한 정보를 포함하고 있는 객체입니다.

  function showText(txt) {
    console.log(txt);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(30);
        }}
      >
        {/* onClick은 리액트에서 사용되는 이벤트 핸들러 속성 중 하나입니다. 이는 사용자가 해당 요소를 클릭했을 때 실행될 함수를 지정하는 데 사용됩니다. */}
        Show age
      </button>

      {/* <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      /> */}
      {/* onChange 속성은 입력값이 변경될 때마다 함수를 호출합니다. */}
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      />
    </div>
  );
}
