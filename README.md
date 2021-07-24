# type_script_study

> 인프런에 이재승님 강의를 보고 메모를 했습니다

# 📌 typescript 시작하기

우선적으로 node js 가 설치되어있어야 한다.
설치가 되어있지않다면 nodejs 공식 페이지에서 설치하기를 바란다.

그리고 `npm init -y` 를 입력해줍니다.

package.json 파일이 만들어진다.

그럼 이제 package 를 설치할 수 있게 된다. 

`npm install typescript` 를 설치한다.
`npx tsc --init` 타입스크립트 설정파일 생성

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
|[몇가지 기본 타입](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/1.ts)|


### 👉 몇가지 기본 타입2

|내용|
|:------:|
|[몇가지 기본 타입](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/1.ts)|
|[null 과 undefined 도 타입으로 지정 할 수 있다.](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/2.ts)|
|[literal type ](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/3.ts)|
|[any 타입 ](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/4.ts)|
|[void 와 never ](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/5.ts)|
|[객체타입 ](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/6.ts)|
|[합집합 교집합 ](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/7.ts)|
|[별칭 주기](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/8.ts)|


### 👉 enum 타입

|내용|
|:------:|
|[enum소개](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/1.ts)|
|[자동할당](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/2.ts)|
|[인덱스 혹은 키값으로 출력](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/4.ts)|
|[enum 아이템 값 string 됨](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/5.ts)|
|[enum key , value 양방향](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/7.ts)|
|[enum key , value true false](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/8.ts)|
|[enum key를 할당](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/9.ts)|
|[enum const enum](https://github.com/smilejakdu/type_script_study/blob/main/src/3.enum_type/10.ts)|


### 👉 함수 타입1

|내용|
|:------:|
|[함수 , 파라미터 타입지정](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/1.ts)|
|[화살표 함수 이용](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/2.ts)|
|[선택 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/3.ts)|
|[매개변수에 기본값 입력](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/4.ts)|
|[나머지 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/5.ts)|


### 👉 자바스크립트 this 이해하기

|내용|
|:------:|
|[javascript this](https://github.com/smilejakdu/type_script_study/blob/main/src/this/6-1.js)|


### 👉 함수타입2

|내용|
|:------:|
|[typescript 파라미터 this 타입설정](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/6-2.ts)|
|[prototype 을 이용해서 내장된 타입기능을 주입](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/7.ts)|
|[일반적인 객체에 prototype 을 이용해서 내장함수 주입](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/8.ts)|
|[둘다 number 일때 반드시 number 로 return 된다는 보장없음](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/10.ts)|
|[함수오버로드를 사용해서 조건을 만족하는 함수타입을 정의](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/11.ts)|
|[named parameters 로 작성](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/12.ts)|
|[named parameters 를 다른곳에서 사용할뗀 interface](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/13.ts)|
|[named parameters refactoring](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type2/14.ts)|


### 👉 interface

|내용|
|:------:|
|[interface 타입설정](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/1.ts)|
|[interface 선택속성](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/2.ts)|
|[interface readonly 속성](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/3.ts)|
|[interface 포함관계](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/4.ts)|
|[interface index 타입](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/5.ts)|
|[interface index 타입](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/7.ts)|
|[interface 로 함수타입정의](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/8.ts)|
|[interface 로 함수의 속성값 정의](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/9.ts)|
|[interface 는 클래스로 구현될 수 있다.](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/10.ts)|
|[interface 를 상속해서 새로운 interface 를확장](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/11.ts)|
|[여러개의 interface를 확장](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/12.ts)|
|[& 기호(교차타입)를 사용하여 여러interface 하나로 합침 ](https://github.com/smilejakdu/type_script_study/blob/main/src/interface/13.ts)|


### 👉 클래스

|내용|
|:------:|
|[클래스 기본 구성](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/1-1.ts)|
|[클래스 상속](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/1-2.ts)|
|[클래스 , super , 접근제한자 , 메소드 오버라이드](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/2.ts)|
|[private 의 다른 표현 #](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/3.ts)|
|[private 는 상속 , 외부 모두 안된다.](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/5.ts)|
|[protected 는 상속은 가능하나 외부에서는 사용 불가능하다](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/6.ts)|
|[readonly 읽기전용은 값을 수정할 수 없다.](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/7.ts)|
|[자동으로 멤버변수할당](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/8.ts)|
|[getter 와 setter](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/9.ts)|
|[정적멤버변수 , static 변수](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/10.ts)|
|[추상클래스](https://github.com/smilejakdu/type_script_study/blob/main/src/ts_class/11.ts)|


### 👉 타입호환성

|내용|
|:------:|
|[타입 호환성](https://github.com/smilejakdu/type_script_study/blob/main/src/type_compatibility/1.ts)|
|[structural typing](https://github.com/smilejakdu/type_script_study/blob/main/src/type_compatibility/4-1.ts)|
|[타입호환성 선택속성](https://github.com/smilejakdu/type_script_study/blob/main/src/type_compatibility/5.ts)|
|[타입호환성 예제 Person 을 Product 에 할당](https://github.com/smilejakdu/type_script_study/blob/main/src/type_compatibility/7.ts)|
|[함수의 타입 호환성](https://github.com/smilejakdu/type_script_study/blob/main/src/type_compatibility/9.ts)|