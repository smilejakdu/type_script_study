https://joshua1988.github.io/web-development/javascript/js-testing/
https://yonghyunlee.gitlab.io/temp_post/jest/
https://github.com/jasmine/jasmine/blob/4097718b6682f643833f5435b63e4f590f22919f/lib/jasmine-core/jasmine.js#L2779


# describe

`describe` 를 사용해서 __Test__ 를 그룹화 할 수 있다.

```ts
describe('test start', () => {
  test('error when i use email is not email', () => {
    //  code 
  });
  test('error when i use password is empty', () => {
    //  code 
  }); 
});
```

__tips__
```ts
desc // 까지 입력하게 되면 자동완성이 생성된다.
```

## test 말고 it

`go to definition` 으로 타고 들어가보면 , 
```ts
declare var beforeAll: jest.Lifecycle;
declare var beforeEach: jest.Lifecycle;
declare var afterAll: jest.Lifecycle;
declare var afterEach: jest.Lifecycle;
declare var describe: jest.Describe;
declare var fdescribe: jest.Describe;
declare var xdescribe: jest.Describe;
declare var it: jest.It;
declare var fit: jest.It;
declare var xit: jest.It;
declare var test: jest.It;
declare var xtest: jest.It;

declare const expect: jest.Expect;
```
라고 적혀 있는 `test` 메서드를 불러와서 사용하지 않고 `it` 메서드를 불러와서 사용해도 무방하다.

안에 테스트 코드들이 어떻게 돌아가는지 알 수 있다.

본인의 상황에 알맞게 가져다가 사용하면 된다.

# export , toBe , toEqual

```ts
	it('password String is not empty', () => {
		passwordTest = UserPassword.create('');

		expect(passwordTest.isSuccess).toBe(false);
		expect(passwordTest.errorValue()).toEqual(USER_PASSWORD_EMPTY_ERROR_MESSAGE);
	});
```

