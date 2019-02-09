# Vue Instance

Vue.js Application 에서는 Vue 함수로 새로운 Instance 를 만드는 것이 시작입니다. 

Vue Component 를 만들어 뒀는데 왜 렌더링이 안 되는가를 따지는데 이들을 렌더링 시켜주는 역할을 하는 주체가 바로 Vue Instance 입니다.

```javascript
let viewModel = new Vue({
    // Vue 인스턴스 옵션
});
```

지난 시간에 `.vue` 파일에 기본으로 담기는 요소인 `template`, `script`, `style` 등의 요소가 이 인스턴스의 옵션 안에 들어갑니다. 

그 중에서 `script` 대신에 렌더링 할 데이터, 라이프 사이클 콜백, 컴포넌트 안에서 사용될 메소드 등을 포함시킬 수 있습니다.

Vue 생성자 안에 컴포넌트 옵션에 대한 객체를 넣어 재활용하거나 옵션에 대하여 확장할 수 있습니다.

이 작업은 프로젝트 파일의 `/src/main.js` 에서 주로 이뤄집니다.

예를 들어 `main.js` 파일에 아래와 같은 문장을 작성하겠습니다.

```javascript
// 위에 있는 문장은 생략.
new Vue({
    el : '#app',
    template : '<h1>Hello, {{ message }}</h1>',
    data : {
        message : 'Vue.js'
    }
});
```

위에 작성한 문장을 해석하면, `el` 에는 `index.html` 에 있는 DOM 중에 해당 되는 쿼리(여기선 아이디나 클래스가 될 수 있습니다.) 를 찾아 `template` 에 기재된 DOM 노드를 렌더링 하라는 뜻입니다.

Vue Instance 의 역할은 즉 HTML 화면에 작성한 컴포넌트에 대하여 렌더링할 때 사용하는 것으로 이해할 수 있습니다.

또한 `data` 란에 렌더링될 때 사용 될 데이터에 대하여 보관합니다. 그리고 `template` 에 템플릿 문법(DOM 노드에 데이터를 때려 박는 문법.) 을 적용할 수 있습니다.

다만 컴포넌트에서의 `data` 는 함수로 반환 시켜 사용했지만, 인스턴스에서는 그냥 객체 자체만 작성하면 되는 차이가 있습니다.

Vue 인스턴스에 넣을 객체에 주로 사용 되는 프로퍼티들은 다음과 같습니다.

- `el` - `index.html` 에 있는 DOM 노드에 해당 되는 쿼리

- `data` - 인스턴스 안에 있는 User Interface 자체에서만(이벤트 포함) 사용 될 데이터입니다.

- `template` - `index.html` 에서 찾은 노드에 대하여 렌더링 할 HTML 문서 및 CSS 스타일 입니다.

- `method` - 인스턴스 안에 있는 User Interface 에서 필요할 때 호출하는 함수들입니다.

- `created`, `updated`, `mounted`, `destroyed` - Vue Instance 에 따른 라이프 사이클 관련 콜백 함수들입니다.

- `watch` : `data` 에서 정의한 속성이 변할 때 추가 동작을 수행하기 위한 속성입니다.

## Comparison With `.vue` Files

지난 시간에 다뤘던 `.vue` 확장자를 가진 파일들은 싱글 파일 컴포넌트를 생성하기 위한 파일이었습니다.

이 파일 안에서는 컴포넌트를 이루기 위한 DOM 노드의 템플릿, 스타일, 로직 코드 들을 뭉쳐뒀습니다.

그렇지만 이를 만들어두고 난 후에 아무 것도 안 하면 컴포넌트가 화면에 보이지 않습니다.

컴포넌트의 DOM 노드를 보이게 하기 위해선 컴포넌트를 import 한 후에 Vue Instance 의 `components` 프로퍼티에 기재해야 컴포넌트의 **이름** 으로 기재 된 Virtual DOM을 브라우저에 렌더링할 수 있습니다.

```javascript
import OwnComponent from './components/OwnComponent';

new Vue({
    el: '#app',
    components: { OwnComponent },
    template: '<OwnComponent />'
});
```

## Comparison With React.js

React.js 에서 컴포넌트 클래스를 만들고 난 후에 렌더링하기 위하여 `react-dom` 라이브러리나 React Native 라이브러리를 따로 사용했습니다.

이는 React.js 에 따로 포함이 되어 있는 것이 아니라 웹, 모바일, VR(React 360) 등에 따라 독립 되어 있어 디바이스 환경에 따라 컴포넌트를 렌더링 하게 도와줬습니다.

하지만 Vue Instance 는 브라우저의 DOM 노드를 다루기 위한 역할만 합니다. 이는 `vue-cli` 에선 웹 Application 에서만 Vue Application 을 가동할 수 있게 만들었습니다.

그러나 Vue.js 로도 모바일 앱을 만들 수 없는 건 아닙니다. Vue Native 를 이용하는데 이는 `vue-native-cli` 를 이용해서 모바일 환경에서만 Vue Application 을 가동할 수 있게 됩니다.

결론으로 React.js 에선 컴포넌트 렌더링 환경(모바일, 웹, VR etc.) 에 대한 모듈을 라이브러리로 쉽게 확장할 수 있지만, Vue.js 에선 컴포넌트 렌더링 환경이 딱 정해지면 변경하기 어렵다는 점의 차이가 있습니다.

## References

- [Vue.js 시작하기](https://joshua1988.github.io/web-development/vuejs/vuejs-tutorial-for-beginner/)
  
  - Vue.js 튜토리얼 보다 캡틴판교 님이 작성하신 문서를 보고 정리하는 것이 좋을 듯함.

## Author

- 강인성([tails5555](https://github.com/tails5555))