# 캔버스 ```<canvas>``` 요소

html `<canvas>` 웹 페이지에서 그래픽적인 것을 그릴 때 사용된다.

```html
    <canvas id="tutorial" width="150" height="150"></canvas>
```

src 및 alt 속성이 없다는 점만 제외하면 `<img>`요소와 비슷하게 보임
하지만 `<canvas>` 요소에는 width와 height 두 속성만 존재한다.
`<img>`요소와 달리, `<canvas>` 요소는 닫는 태그 `</canvas>`가 필요하다.

> 출처: https://cornswrold.tistory.com/1 [평범한개발자노트:티스토리]

# 렌더링 컨텍스트
`<canvas>` 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌더링 컨텍스(rendering contexts)를 노출하여,

출력할 컨텐츠를 생성하고 다루게 됩니다. 본 튜토리얼에서는, 2D 렌더링 컨텍스트를 집중적으로 다룹니다. 다른 컨텍스트는 다른 렌더링 타입을 제공합니다. 예를 들어, WebGL은 OpenGL ES 을 기반으로 하는 3D 컨텍스트를 사용합니다.

캔버스는 처음에 비어있습니다. 무언가를 표시하기 위해서, 어떤 스크립트가 랜더링 컨텍스트에 접근한 다음 컨텍스트를 이용하여 캔버스에 그림을 그린다고 생각하면 됩니다.

 `<canvas>`요소는 getContext() 메서드를 이용해서, 랜더링 컨텍스트와 (렌더링 컨텍스트의) <u>그리기 함수들을</u> 사용할 수 있습니다.  getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라미터를 가집니다. 본 튜토리얼에서 다루고 있는 2D 그래픽의 경우, CanvasRenderingContext2D (en-US)을 얻기위해 "2d"로 지정합니다.

```js
const canvas = document.getElementById('tutorial');
const ctx = canvas.getContext('2d');
```