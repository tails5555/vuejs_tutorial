# `.vue` Files

Vue.js 를 시작하기 앞서 `.vue` 파일에 대한 구성을 잠깐 알아보도록 하겠습니다.

우선 React.js 에서 컴포넌트 별 파일 구성은 컴포넌트 파일(JavaScript), CSS 파일 / SCSS 파일 로 묶습니다.

그렇지만 Vue.js 에서는 `.vue` 파일 안에 컴포넌트 DOM, JavaScript 논리 문장, CSS 파일들을 싹 다 집어 넣습니다.

```jsx
<template>
    <h1 class="title">{{ message }}</h1>
</template>

<script>
export default {
    name : 'Title',
    data : () => ({
        message : '안녕하십니까?'
    })
}
</script>

<style scoped>
.title {
    background-color : green;
}
</style>
```

Vue.js 를 이용한 소-중규모 프로젝트에서는 `.vue` 파일을 잘 사용하지 않고, `new Vue({})`, `Vue.component` 를 이용해서 정의하는 것이 좋습니다. 이를 JavaScript 문장 안에서 전부 해결해도 큰 어려움은 없습니다.

하지만 이보다 규모가 커지면 CSS나 SCSS 문서를 계속 불러오는 것과 특정 DOM 에 대하여 계속 작성하면 컴포넌트 렌더링을 위한 문장인지 디자인을 위한 문장인지 구분이 안 가게 됩니다.

이러한 관심사들을 한 곳에 모으기 위해 `.vue` 확장자를 가진 **싱글 파일 컴포넌트** 를 생성하게 됩니다. 

Vue.js 에서 User Interface 의 정의 방법론은 기능 별로 거대한 레이어로 나누는 것이 아니고, 느슨하게 결합된 컴포넌트를 나누어 템플릿과 로직, 스타일이 결합되어 배치시켜 응집력을 향상 시키는 것입니다.

참고로 `.vue` 파일은 ES5 이후의 문법도 적용시킬 수 있습니다. 

## Elements About `.vue`

1. `<template>`

이는 컴포넌트를 구성할 DOM 을 작성합니다. 이는 HTML 를 주로 사용합니다. 또한 템플릿 내부에 중괄호 2개로 감싸고 로직 문단에서 사용할 데이터를 넘겨주면 컴포넌트가 브라우저에 뜰 때 렌더링 됩니다.

2. `<script>`

이는 자바스크립트 문장을 이용한 로직 구성입니다. `.vue` 파일 안에는 딱 1개의 `<script>` 문장만 작성될 수 있으며, 이 스크립트 안에서는 컴포넌트 옵션에 대한 객체를 내보내야 합니다.

3. `<style>`

이는 컴포넌트 DOM 에 스타일을 입힐 때 사용합니다. 기본 언어는 CSS를 사용합니다. 이 태그는 여러 개 있어도 상관 없습니다. 또한 `style` 태그에서는 `scoped`, `module` 속성을 가질 수 있습니다.

## Vue Loader With Vue Files

`.vue` 파일을 읽어주는 모듈이 바로 `vue-loader` 입니다. 이는 `webpack` 에서 사용되는 로더이고, 모던 자바스크립트를 지원하고, 개발 중에 컴포넌트 핫 리로딩(수정될 시 다시 렌더링하는 거) 을 지원합니다. 

또한 `vue-loader` 을 이용해서 `.vue` 파일을 읽어들이는 설정도 `webpack.config.js` 에서 해야 하는데, `.vue` 파일 안에 작성된 `script` 태그와 `style` 태그 안에 쓰이는 언어를 다르게 해야 하는 경우 종종 사용됩니다. (예를 들어 자바스크립트가 아니라 커피스크립트, 타입스크립트로 작성하는 경우, CSS 가 아니라 SCSS 를 이용하는 경우.)

## Author

- 강인성([tails5555](https://github.com/tails5555))