# my-react-journey

# 1

PS C:\Users\intpi\OneDrive\문서\GitHub\my-react-journey> npx create-react-app .
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\intpi\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\intpi\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\intpi\AppData\Local\npm-cache_logs\2023-12-14T14_16_08_327Z-debug-0.log
PS C:\Users\intpi\OneDrive\문서\GitHub\my-react-journey>

폴더 만들었음
https://blog.naver.com/exit0null0/223257547429

# 2

src>App.js --> src>Index.js --> Public>index.html

# 3

npx create-react-app .
npm start

# 4

package.json의

"scripts": {
"start": "react-scripts start", 개발모드로 프로그램 실행
"build": "react-scripts build", 실제 배포모드로 만들어주는 것
"test": "react-scripts test",
"eject": "react-scripts eject" 내부 설정 파일을 꺼내는 역할,웹팩이나 바벨설정을 변경하고 싶을때 사용됨
},

# 5

jsx : 자바스크립트 내부에 html처럼 작성하는 것을 말한다
JSX는 JavaScript XML의 약자로, JavaScript의 확장 문법 중 하나입니다. 주로 React 라이브러리에서 사용되며, UI 구성 요소를 작성할 때 XML 형식의 문법을 사용하여 JavaScript 코드를 간결하고 가독성 있게 작성할 수 있게 해줍니다.
일반적으로 JSX 코드는 화면에 렌더링할 UI 컴포넌트를 정의하는 데 사용됩니다. JSX에서는 HTML과 유사한 태그를 사용하여 UI를 표현하며, 이 태그들은 React 컴포넌트를 나타냅니다.
특징
XML 형식: JSX는 XML과 비슷한 문법을 사용하며, HTML 태그와 유사한 구조를 가지고 있습니다.
JavaScript 표현식 사용: JSX 안에서는 중괄호({})를 사용하여 JavaScript 표현식을 포함할 수 있습니다. 이를 통해 동적인 값을 JSX에 포함시킬 수 있습니다.
JSX 파일은 일반적으로 확장자가 .jsx이며, Babel과 같은 도구를 사용하여 일반 JavaScript 코드로 변환됩니다. 변환된 JavaScript 코드는 브라우저에서 실행될 수 있습니다. 따라서 JSX 파일은 결국 JavaScript 파일로 변환되어 실행됩니다.

# 6

리액트로 만든 페이지는 캄포넌트들로 구성되어있다
페이지 단위로 html을 작성하는 것이 아니라 각 부분을 컴포넌트로 만들어 조립해서 사용한다
비슷한 부분들은 코드를 재사용할 수 있고...유지보수가 쉬워짐~

컴포넌트는 함수로 만들어져 있고 default로 export 되고 있다.
이걸 index.js에서 import해서 사용한다. 이렇게 함수로 만들어진 컴포넌트롤 함수형 컴포넌트라고 한다.

모든 컴포넌트는 대문자로 시작해야 한다.

함수가 리턴(return)하는 것은 jsx(JavaScript XML)이다

# 7

HMR(hot module replacement) : App.js 작성수정조정한 코드는 브라우저에 바로 반영이 된다
React와 함께 사용: React의 HMR은 개발 서버와 함께 사용되어 React 애플리케이션을 빠르게 개발하고 테스트할 수 있게 합니다.
개발 중인 애플리케이션을 새로고침하지 않고도 모듈을 교체하고 즉시 업데이트하는 기술입니다. 이는 개발자가 코드 변경을 빠르게 확인하고 반영할 수 있도록 도와줍니다. 주로 프론트엔드 개발에서 사용되며, 웹팩(Webpack)과 같은 모듈 번들러에서 지원됩니다.

# 8

JS파일 만들고 함수만들고 export하면 간단하게 컴포넌트를 만들수있다.모든 컴포넌트는 대문자로 시작해야 한다.
컴포넌트는 여러번 재사용이 가능하다
