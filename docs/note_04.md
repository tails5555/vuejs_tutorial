# Vue Components

지난 스터디 노트에서 다뤘던 Instance 는 `index.html` 에 사용자가 등록하고 싶은 DOM 객체를 올려서 브라우저에 렌더링 하였습니다.

그렇지만 Web Application 에서는 User Interface 조각 중에 일부는 재활용을 위한 DOM 객체가 존재합니다.

그래서 Vue.js 에서도 재활용이 가능한 형태로 관리하는 주체인 컴포넌트가 있습니다. 물론 컴포넌트를 사용하기 앞서 **인스턴스 초기화** 는 당연히 해둬야 합니다.

이번 노트에서는 Vue 에서 쓰이는 Component 의 개념을 자세히 알아 보겠습니다.

## Creation of Vue Components

Vue.js 에서 컴포넌트를 만드는 과정은 매우 간단합니다.

지난 시간에 다뤘던 `.vue` 파일을 이용하는 방법, 자바스크립트 파일에 컴포넌트를 생성하여 만드는 방법이 있습니다.

1. JavaScript 문장을 이용한 컴포넌트 생성 방법 - 전역 컴포넌트

```javascript
Vue.component('own-component', {
  template : `
    <h1>{{ message }}</h1>
  `,
  data : () => ({
    message : '안녕하십니까?'
  })
});

new Vue({
  el: '#component0'
});

new Vue({
  el: '#component0_1'
});
```

main.js

```html
<div id="component0">
    <own-component></own-component>
</div>
<div id="component0_1"></div>
```

index.html

`main.js` 파일 안에 `Vue.component([컴포넌트 이름], { /* 컴포넌트 속성 */ })` 을 작성하면 `own-component` 를 어느 템플릿에서든 DOM 노드로 사용하여 호출할 수 있습니다. 이를 **전역 컴포넌트** 라고 합니다.

그렇지만 컴포넌트를 생성할 때 주의할 점은 인스턴스의 `data` 는 자바스크립트 객체 문장으로 작성하지만, 컴포넌트의 `data` 는 **함수나 화살표 함수** 를 사용해야 합니다.

전역 컴포넌트는 User Interface 에서 Header, Footer 등 항상 필요한 노드에 적용하는 것이 좋습니다.

2. JavaScript 문장을 이용한 컴포넌트 생성 방법 - 지역 컴포넌트

React.js 에서는 컴포넌트를 불러오기 위해선 파일을 직접 생성한 이후에 불러와야 합니다.

그렇지만 Vue.js 에서는 컴포넌트를 렌더링하기 위해 인스턴스에 사용할 컴포넌트를 등록하고 사용해야 합니다.

인스턴스에서 특정 컴포넌트에 대하여 지정을 하고 템플릿 문장에서 DOM 노드 처럼 사용할 수 있게끔 도와주는 컴포넌트를 **지역 컴포넌트** 라고 합니다. 

```javascript
const component1 = {
  template : '<h1>{{ message }}</h1>',
  data : () => ({
    message : '안녕!!!'
  })
};

const component2 = {
  template : '<h1>그래, {{ message }}</h1>',
  data : () => ({
    message : '안녕!!!'
  })
};

new Vue({
  el: '#component1',
  components: {
    'my-component' : component1,
    'your-component' : component2
  },
  template: `
    <div>
      <my-component></my-component>
      <your-component></your-component>
    </div>
  `
});
```

main.js

또한 Vue.js 에서는 JSX 문법을 사용할 수 있습니다. 하지만 React.js 와 마찬가지로 복수의 컴포넌트를 반환하기 위해 `div`, `li` 등의 태그로 묶어 줘야 합니다.

참고로 Vue.js 에서는 컴포넌트의 이름을 Snake Case 로 짓되, `_` 기호를 `-` 로 사용하는 것이 관례입니다. (예를 들어 `myComponent` 를 `my-component` 로 짓는 경우.)

3. `.vue` 파일을 이용한 컴포넌트 생성 방법

지난 시간에도 언급했듯이 `.vue` 파일은 싱글 파일 컴포넌트로, 인스턴스에서 보여줄 컴포넌트에 대하여 지정하고 보여줍니다.

이는 아래를 참고하시길 바랍니다.

- [Vue 파일 구성 요소](https://github.com/tails5555/vuejs_tutorial/blob/master/docs/note_02.md)

## Comparison With React.js Components

1. 전역 / 지역 컴포넌트에 대한 차이

React.js 에서는 컴포넌트에 대하여 전역과 지역에 대한 차이를 따로 두지 않고 모두 **지역 컴포넌트** 만 사용 하였습니다. 

그렇지만 Vue.js 에서는 전역 컴포넌트, 지역 컴포넌트에 대한 차이를 두어 User Interface 중에서 공통으로 쓰이는 것들만 묶어 사용하여 매번 지역 컴포넌트를 Importing 하는 것을 줄여주는 것이 그만의 장점으로 보입니다.

하지만 Vue.js 에서는 지역 컴포넌트를 더욱 사용하는 편입니다. 모든 컴포넌트를 전역으로 올리면 Application 성능 뿐만 아니라, 프로퍼티에 대한 참조를 올바르지 못 하게 해석할 수 있는 상황도 발생하기 때문입니다.

2. Fragment 지원 여부

React.js 에서는 복수의 DOM 객체에 대하여 `div`, `li` 등에 대한 태그에 구애 받지 않게끔 사용하는 개념인 `Fragment` 태그가 존재합니다.

그렇지만 Vue.js 에서 `Fragment` 를 사용하기 위해서는 다른 라이브러리를 사용하는 방법 밖에 없습니다.

이를 위한 대표적인 라이브러리가 `vue-fragment` 인데 이는 `npm` 이나 `yarn` 을 이용해서 설치하고 사용하시면 됩니다.

## Author

- 강인성([tails5555](https://github.com/tails5555))