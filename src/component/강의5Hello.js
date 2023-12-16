// 방식 1 함수 기본식
// const Hello = function () {
//   <p>Hello</p>;
// };
// export default Hello;

// 방식2 화살표 함수
// const Hello = () => {
//   <p>Hello</p>;
// };
// export default Hello;

// 방식3 한줄
// import World from "./World";
// import "./Hello.css";
import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <div>
      <h1
        style={{
          color: "#f00",
          borderRight: "12px solid #000",
          marginBottom: "50px",
          opacity: 1,
        }}
      >
        Hello
      </h1>
      <div className={styles.box}>Hello</div>
      {/* <World />
      <World /> */}
      {/* 컴포넌트는 여러번 재사용이 가능하다 */}
    </div>
    // div나 빈 태그(<></>)없으면 에러가 남 왜냐하면 jsx는 하나의 태그만 만들 수 있다.div가 없다면 두개의 태그로 구성되는 거니 하나의 태그로 감싸준다
  );
}
