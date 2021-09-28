# 모듈

https://www.youtube.com/watch?v=WUirHxOBXL4
모듈?? 다들 대충 알고있을것이다.
하지만 만약에 당신이

```ts
import { Module } from "./module";
import Module from "./module";
import * as Module from "./module";
const Module = await import("./module");
```

4개의 차이점을 말할수없다면 모르는것이라 생각하고 다시 한번 공부해보자.

# named export

많은 것들을 export 와 import 하고싶을때 , named export 를 사용하게 된다.

**math.js**

```ts
export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const divide = (a, b) => a / b;
```

**main.js**

```ts
import { Plus } from "./math";
```

그런데 나는 `Plus` 라는 네이밍이 마음에 안든다
그럴때는 `as` 를 사용한다.

```ts
import { plus as add } from "./math";
```

# default export

각 파일마다 단 한개의 `default export` 만 존재할 수 있다.
**math.js**

```ts
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const divide = (a, b) => a / b;
export default { plus, minus, divide };
```

**main.js**

```ts
import math from "./math";
math.plus(2, 2);
```

그리고 우리가 원하는 이름으로 할 수도 있다.

`export` 와 `export default` 를 같이 사용할 수도 있다.

**db.js**

```ts
const connectToDb = () => {
  /*magic*/
};
export const getUrl = () => {
  /*magic*/
};
export default connectToDb;
```

**main.js**

```ts
import connect, { getUrl } from "./db";
```

이런식으로 사용 할 수도 있다.
