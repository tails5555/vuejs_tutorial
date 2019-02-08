# Project Init About Vue.js

Vue.js 는 React.js 와 마찬가지로 사용자 인터페이스(User Interface) 를 만들기 위한 **프레임워크** 입니다. 반대로 React.js 는 **라이브러리** 입니다.

그리고 View 에 대한 초점을 맞추고 다른 라이브러리나 프레임워크와 통합하기 쉬운 구조로 되어 있습니다.

Vue.js 를 시작하기 위해 다음과 같은 방법이 있습니다. 그러나 버전 관리 및 단위 테스팅, 템플릿 설정을 쉽게 하기 위하여 2번째 방법을 사용하는 것을 권장합니다.

1. CDN 을 이용한 접근 방법

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

2. `vue-cli` 를 설치하고 프로젝트를 생성하는 방법

`vue-cli` 의 알파 버전은 3.0 입니다. 아직까지 2.x 대를 사용하기 때문에 이를 기준으로 설명하겠습니다. 

이는 `npm` 이나 `yarn` 을 사용해서 설치하시길 바랍니다. 또한 이를 진행하기 앞서 `webpack` 버전 차이에 대하여 물을 것입니다. 새 버전으로 설치하고 진행하시길 바랍니다.

```
npm install -g @vue/cli
yarn add @vue/cli
```

Vue CLI 에 포함된 템플릿은 `babel`, `eslint`, `unit-mocha`(혹은 `jest`) 을 포함합니다. 

이제 Vue.js 프로젝트를 새로 생성하기 위해 아래와 같은 명령어를 입력하시길 바랍니다. `webpack` 을 모듈화 도구로 설정하면 `vue-cli` 에서 알아서 설정 해줍니다.

```
vue init webpack [프로젝트_이름]
```

## Directory Structure

`vue-cli` 2.x 버전을 기준으로 나오는 디렉토리 구성은 아래와 같습니다.

```
build -> 모듈화 도구를 webpack 으로 설정하면 build 과정을 돕기 위하여 자동으로 생성되는 파일들
config -> 프로젝트 패키지 배포에 대한 설정
node_modules -> npm, yarn 의존성 파일
src -> Application 소스 코드
 ├ assets -> 이미지, 루트 CSS, SCSS 파일
 ├ components -> Vue Component 관련 파일
 └ router -> Vue Router 관련 파일
static -> Application 정적 파일
test -> Application 테스트 파일
.babelrc -> Babel 트랜스파일러 설정 파일
.eslint~ -> ES Lint 관련 설정 파일
package.json -> npm / yarn 프로젝트 패키지 설정 파일
```

## Reference

- Vue-Cli 3.0 시작하기
  - http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/

## Author

- 강인성([tails5555](https://github.com/tails5555))