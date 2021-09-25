https://docs.nestjs.com/providers

이전에 https://velog.io/@ordidxzero/nest-provider-and-module#provider
여기를 보시면 조금 더 도움이 된다.
# 📌 @Injectable

- `@Injectable` 데코레이터는 보통 클래스위에다가 선언한다.
- Nest Ioc 컨테이너에서 관리 할 수 있는 클래스임을 선언한다.
- 내가 행위자가 되어서 module.ts 파일에 있는 `providers` 에 기입된다.

__services.ts__
```ts
@Injectable()
export class TestInjectable {
  
}
```

__module.ts__
```ts

@Module({
  imports: [],
  providers: [..... , TestInjectable],
})

export class TestModule {}
```

# 📌 @Inject

- `@Inject` 데코레이터는 보통 생성자 위에다가 선언한다.
- 내가 비행위자가 되어서 module.ts 파일에 있는 `provide` 기입하게 된다.

__module.ts__

```ts
@Module({
  imports : [],
  exports : [],
    providers: [
	...
    {
      provide: Test_PROVIDE,
      useClass: TestRepository,
    },
    ]
})
```

__service.ts__

```ts
export class JwtService {
  constructor(@Inject(Test_PROVIDE) private readonly testRepository: TestRepository) {}
```


https://docs.nestjs.com/providers#dependency-injection

반드시 `@Injectable` 가 있는 클래스만 `providers` 에 넣어야하는것도 아니다 . 
`@Injectable` 이 클래스위에 없어도 
provider 의 주요 아이디어는 
>`dependencies` 를 `inject` 할 수 있다

`@Injectable` 가 있다면 `providers` 에 기입을 해야하고 , 
`@Injectable` 가 없는 어떠한 클래스를 `dependencies inject` 하고 싶을때도 `providers` 에 넣어준다.

`dependencies` 를 `inject` 를 한다는것은 `인스턴스 한다` 개념으로 생각해서 
`controller` 에서 가져다가 사용한다고 생각하면 될것 같다.
즉 `providers` 에 넣는다 -> 인스턴스화 한다.


# 📌 @InjectRepository

- 생성자 위에 `@InjectRepository` 를 사용한다.
- 사용하는 `Entity` 를 인자값으로 보통 넣어준다.



__entity.ts__
```ts
@Entity({ schema: 'test_database', name: 'test' })
export class TestEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @Column('varchar', { name: 'testname', length: 80 })
  nickname: string;
```

__service.ts__
```ts
@Injectable()
export class TestService {
  // 비지니스 로직인 서비스랑 테이블 entity 사이를 Repositoy 가 이어준다.
  constructor( // 여기에 들어가는 TestEntity 는 entity 이다.
    @InjectRepository(TestEntity) private usersRepository: Repository<TestEntity>,
	) {}
```

