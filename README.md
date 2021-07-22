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

### 몇가지 기본 타입1

|내용|
|:------:|
|[몇가지 기본 타입](https://github.com/smilejakdu/type_script_study/blob/main/src/2.type_define/1.ts)|


### 몇가지 기본 타입2

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


### enum 타입

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


### 함수 타입1

|내용|
|:------:|
|[함수 , 파라미터 타입지정](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/1.ts)|
|[화살표 함수 이용](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/2.ts)|
|[선택 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/3.ts)|
|[매개변수에 기본값 입력](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/4.ts)|
|[나머지 매개변수](https://github.com/smilejakdu/type_script_study/blob/main/src/function_type/5.ts)|