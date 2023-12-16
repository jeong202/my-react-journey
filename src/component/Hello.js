// 1번. 화면 업데이트 : 돔을 업데이트하는 자바스크립트 코드
// name은 컴포넌트가 관리하는 상태값(state)이 아니라 단순한 변수이다.
// 따라서 값이 바뀌더라도 리액트는 그것을 인지하지 못하고 UI를 업데이트 해주지 않는다. 그래서 자바스크립트로 업데이트를 따로 해주었다
// export default function Hello() {
//   let name = "Mike";

//   function changeName() {
//     name = name === "Mike" ? "Jane" : "Mike";
//     console.log(name);
//     document.getElementById("name").innerHTML = name;
//   }
//   return (
//     <div>
//       <h1>state</h1>
//       <h2 id="name">{name}</h2>
//       <button onClick={changeName}>Change</button>
//     </div>
//   );
// }

//2번 : 리액트 hook인 usestate
import { useState } from "react";
export default function Hello() {
  const [name, setName] = useState("Mike");
  // usestate는 배열을 반환한다. 배열의 첫번째 값은 state(변수명과 비슷), 두번째는 state를 변경해주는 함수. 배열 구조 분해를 사용해서 표현함
  // setname 함수가 호출되서 name이 바뀌면 리액트는 이 컴포넌트를 다시 랜더링해준다.useState()의 ()안에는 초기값이 들어간다

  //바꿔주는 부분 방식1
  // function changeName() {
  //   const newName = name === "Mike" ? "Jane" : "Mike";
  //   setName(newName);
  // }

  //바꾸주는 부분 방식 2
  // function changeName() {
  //   setName(name === "Mike" ? "Jane" : "Mike");
  // }

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      {/* 바꾸주는 부분 방식 3 */}
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
}
