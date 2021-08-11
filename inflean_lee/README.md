# 인프런 이재승님 강의

> 인프런에 이재승님 강의를 보고 메모를 했습니다

# 📌 typescript 시작하기

우선적으로 node js 가 설치되어있어야 한다.
설치가 되어있지않다면 nodejs 공식 페이지에서 설치하기를 바란다.

그리고 `npm init -y` 를 입력해줍니다.

package.json 파일이 만들어진다.

그럼 이제 package 를 설치할 수 있게 된다. 

`npm install typescript` 를 설치한다. 아니면 `npm install -g typescript` 라고 해도 된다
`npx tsc --init` 타입스크립트 설정파일 생성

# 📌tsc -w 

자 그래서 이제  `test.ts` 를 만들고 코드를 돌려볼려고 하면 안돌아간다. 왜일까 ??
브라우저가 못 읽어서 그렇다. 브라우저는 무조건 자바스크립트 파일만 읽을수가 있다. 그래서 무조건 자바스크립트 파일을 변환해서 활용을 해야한다.
그것을 `tsc -w` 명령어를 입력하게 되면 ts 파일을 자동으로 자바스크립트 파일로 변환을 한다.


## 👉 lodash 설치

npm install @types/lodash

설치를 하면 자동 import 가 되고 타입정보를 좀 더 잘 볼수가 있다.

## 👉단축키

- Auto import : command + .
- 멀티 선택 : 원하는 단어 선택 후 , command + d
- 선택 취소할 때는 esc
- 멀티 커서 : command + option + 화살표
- 실행1 : control + option + n
- 실행2 : ts-node [이름.ts]

# 📌  내용

### 👉 몇가지 기본 타입1

|내용|
|:------:|
|[몇가지 기본 타입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/1.ts)|


### 👉 몇가지 기본 타입2

|내용|
|:------:|
|[몇가지 기본 타입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/1.ts)|
|[null 과 undefined 도 타입으로 지정 할 수 있다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/2.ts)|
|[literal type ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/3.ts)|
|[any 타입 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/4.ts)|
|[void 와 never ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/5.ts)|
|[객체타입 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/6.ts)|
|[합집합 교집합 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/7.ts)|
|[별칭 주기](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/2.type_define/8.ts)|


### 👉 enum 타입

- 양방향 , 단방향 이해할것
- enum const 

|내용|
|:------:|
|[enum소개](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/1.ts)|
|[자동할당](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/2.ts)|
|[인덱스 혹은 키값으로 출력](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/4.ts)|
|[enum 아이템 값 string 됨](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/5.ts)|
|[enum key , value 양방향](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/7.ts)|
|[enum key , value true false](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/8.ts)|
|[enum const 를 사용하면 컴파일후에 파일을 생성하지않는다. => 번들파일 크기를 줄일수있다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/9.ts)|
|[enum const enum](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/3.enum_type/10.ts)|


### 👉 함수 타입1

|내용|
|:------:|
|[함수 , 파라미터 타입지정](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/4.function_type/1.ts)|
|[화살표 함수 이용](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/4.function_type/2.ts)|
|[선택 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/4.function_type/3.ts)|
|[매개변수에 기본값 입력](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/4.function_type/4.ts)|
|[나머지 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/4.function_type/5.ts)|


### 👉 자바스크립트 this 이해하기

- 화살표함수에서의 this 와 그냥 함수에서의 this 이해하기

|내용|
|:------:|
|[javascript this](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/5.this/6-1.js)|


### 👉 함수타입2

- 앞서 javascript this 에 대해 배웠고 typescript 에서의 this 는??

|내용|
|:------:|
|[typescript 파라미터 this 타입설정](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/6-2.ts)|
|[prototype 을 이용해서 내장된 타입기능을 주입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/7.ts)|
|[일반적인 객체에 prototype 을 이용해서 내장함수 주입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/8.ts)|
|[둘다 number 일때 반드시 number 로 return 된다는 보장없음](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/10.ts)|
|[함수오버로드를 사용해서 조건을 만족하는 함수타입을 정의](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/11.ts)|
|[named parameters 로 작성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/12.ts)|
|[named parameters 를 다른곳에서 사용할뗀 interface](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/13.ts)|
|[named parameters refactoring](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/6.function_type2/14.ts)|


### 👉 interface

자바와같은 다른 언어에서 인터페이스는 클래스를 구현하기 전에 필요한 메서드를 정의하는 용도로 쓰입니다.

|내용|
|:------:|
|[interface 타입설정](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/1.ts)|
|[interface 선택속성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/2.ts)|
|[interface readonly 속성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/3.ts)|
|[interface 포함관계](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/4.ts)|
|[interface index 타입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/5.ts)|
|[interface index 타입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/7.ts)|
|[interface 로 함수타입정의](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/8.ts)|
|[interface 로 함수의 속성값 정의](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/9.ts)|
|[interface 는 클래스로 구현될 수 있다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/10.ts)|
|[interface 를 상속해서 새로운 interface 를확장](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/11.ts)|
|[여러개의 interface를 확장](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/12.ts)|
|[& 기호(교차타입)를 사용하여 여러interface 하나로 합침 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/13.ts)|
|[interface 와 index 타입 적용](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/7.interface/14.ts)|


### 👉 클래스

|내용|
|:------:|
|[클래스 기본 구성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/1-1.ts)|
|[클래스 상속](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/1-2.ts)|
|[클래스 , super , 접근제한자 , 메소드 오버라이드](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/2.ts)|
|[private 의 다른 표현 #](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/3.ts)|
|[private 는 상속 , 외부 모두 안된다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/5.ts)|
|[protected 는 상속은 가능하나 외부에서는 사용 불가능하다](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/6.ts)|
|[readonly 읽기전용은 값을 수정할 수 없다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/7.ts)|
|[자동으로 멤버변수할당](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/8.ts)|
|[getter 와 setter](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/9.ts)|
|[정적멤버변수 , static 변수](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/10.ts)|
|[추상클래스](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/8.ts_class/11.ts)|


### 👉 타입호환성

|내용|
|:------:|
|[타입 호환성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/9.type_compatibility/1.ts)|
|[structural typing](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/9.type_compatibility/4-1.ts)|
|[타입호환성 선택속성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/9.type_compatibility/5.ts)|
|[타입호환성 예제 Person 을 Product 에 할당](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/9.type_compatibility/7.ts)|
|[함수의 타입 호환성](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/9.type_compatibility/9.ts)|


### 👉 제네릭
inflean_lee
제네릭은 타입 정보가 동적으로 결정되는 타입이다.

|내용|
|:------:|
|[제네릭을 사용하지않고 숫자형 문자형에 따른 함수분리](https://github.com/smilejakdu/typescript_study/blob/main/inflean_lee/src/10.generic/1.ts)|
|[제네릭을 사용하지않고 오버로드](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/2.ts)|
|[제네릭 사용법 <T>](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/3.ts)|
|[제네릭은 데이터의 타입에 다양성을 부여해준다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/4.ts)|
|[A extends B](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/5.ts)|
|[extends 키워드 자세히 알아보기](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/6.ts)|
|[제네릭을 이용해서 원하는 타입을 제한가능](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/10.generic/7.ts)|

### 👉 맵드 타입

인터페이스가 있을때 인터페이스에 있는 모든 속성을 optional 로 바꾸거나 readonly 로 바꾸는 일을 맵드 타입을 이용해서 할수 있다.
맵드 타입은 `in` 이라는 키워드를 사용한다.

|내용|
|:------:|
|[제네릭을 사용하지않고 숫자형 문자형에 따른 함수분리](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/1.ts)|
|[맵드타입의 문법 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/2.ts)|
|[입력된 인터페이스의 모든 속성을 boolean 타입으로 만들어 주는 맵드 타입](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/3.ts)|
|[유틸리티 타입 Partial , Readonly](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/4.ts)|
|[유틸리티 타입 Pick](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/5.ts)|
|[유틸리티 타입 Record](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/6.ts)|
|[맵드 타입을 이용해서 enum 활용](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/7.ts)|
|[맵드 타입을 이용해서 enum 활용2](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/11.mapped_type/8.ts)|


### 👉 타입 추론

타입을 지정하지 않아도 자동으로 타입을 지정해 줍니다.

|내용|
|:------:|
|[타입 추론](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_inference/1.ts)|
|[const 타입 추론](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_inference/2.ts)|
|[비구조화 할당 타입 추론](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_inference/3.ts)|
|[interface 타입 추론](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_inference/4.ts)|
|[함수 타입 추론](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_inference/5.ts)|

### 👉 타입 가드
타입가드는 자동으로 타입의 범위를 좁혀주는 타입스크립트의 기능이다.
타입가드를 잘 활용하면 `as` 와 같은 타입 단언 코드를 피할수있다.

|내용|
|:------:|
|[as 를 자주사용하지 말자](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/1.ts)|
|[클래스의 경우는 instanceof 키워드를 사용할 수있다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/3.ts)|
|[interface 는 타입을 위한 코드이기때문에 컴파일후에는 제거가 된다.](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/4.ts)|
|[interface 를 구별하기 위한 한가지방법은 유니온타입사용 ](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/5.ts)|
|[switch 문을 사용하기](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/7.ts)|
|[타입을 검사하는 함수만들기](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/8.ts)|
|[함수를 작성하는게 번걸보다면 in 키워드를 사용할것](https://github.com/smilejakdu/type_script_study/blob/main/inflean_lee/src/type_guard/9.ts)|


### 👉 실습 프로젝트

https://github.com/landvibe/inflearn-react-project
