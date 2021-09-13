https://github.com/typeorm/typeorm/blob/master/docs/select-query-builder.md#what-is-querybuilder 
한글 번역

# Reference
[공식문서](https://typeorm.io)

[github.com/typeorm](https://github.com/typeorm/typeorm)

[reference velog data mapper 와 querybuilder](https://velog.io/@leeinae/TypeORM-TypeORM%EC%9D%98-%ED%8C%A8%ED%84%B4%EB%93%A4%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90#data-mapper-%ED%8C%A8%ED%84%B4)

[reference velog 어떤상황에서 어떤패턴으로 개발해야할까](https://velog.io/@josworks27/typeORM-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)

# Select using Query Builder
* [What is `QueryBuilder`](#what-is-querybuilder)
* [How to use `QueryBuilder`](#how-to-use-querybuilder)
* [`QueryBuilder` 사용시 중요한 사항](#querybuilder-사용시-중요한-사항)
* [How to create and use a `QueryBuilder`](#how-to-create-and-use-a-querybuilder)
* [getRepository 와 Repository](#getrepository-와-repository)
* [`QueryBuilder`를 사용하여 값 가져오기](#querybuilder를-사용하여-값-가져오기)
* [별칭(alias)은 무엇이냐](#alias은-무엇이냐)
* [매개변수를 사용하여 데이터 이스케이프](#매개변수를-사용하여-데이터-이스케이프)
* [WHERE 표현식 추가](#where-표현식-추가)
* [Adding `HAVING` expression](#adding-having-expression)
* [Adding `ORDER BY` expression](#adding-order-by-expression)
* [`GROUP BY` 표현식 추가](#group-by-표현식-추가)
* [Adding `LIMIT` expression](#adding-limit-expression)
* [Adding `OFFSET` expression](#adding-offset-expression)
* [Joining relations](#joining-relations)
* [Inner and left joins](#inner-and-left-joins)
* [Join without selection](#join-without-selection)
* [Joining any entity or table](#joining-any-entity-or-table)
* [Joining and mapping functionality](#joining-and-mapping-functionality)
* [Getting the generated query](#getting-the-generated-query)
* [Getting raw results](#getting-raw-results)
* [Streaming result data](#streaming-result-data)
* [Using pagination](#using-pagination)
* [Set locking](#set-locking)
* [Max execution time](#max-execution-time)
* [Partial selection](#partial-selection)
* [Using subqueries](#using-subqueries)
* [Hidden Columns](#hidden-columns)

## What is `QueryBuilder`

QueryBuilder는 TypeORM의 기능 중 하나입니다. 만약 더 많은 종류를 알고싶으시다면 공식문서를 참고하시면 됩니다.
`QueryBuilder`를 사용하여 SQL 쿼리를 작성하고 실행하고 자동으로 변환된 엔터티를 가져올 수 있습니다.

`QueryBuilder` 간단한 예시

```typescript
const firstUser = await connection
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .getOne();
```

위의 코드가 만약에 `raw query` 가 된다면

```sql
SELECT
    user.id as userId,
    user.firstName as userFirstName,
    user.lastName as userLastName
FROM users user
WHERE user.id = 1
```

`User` 인스턴스를 반환합니다.

```
User {
    id: 1,
    firstName: "Timber",
    lastName: "Saw"
}
```

## how to use Querybuilder
`QueryBuilder` 를 사용하게 되면 , 자동으로 Entity 로 변환해 반환한다.

```ts
import { getRepository } from 'typeorm';

const user = await getRepository(User)
	.createQueryBuilder("user")
	.where("user.id = :id", {id : 1}
	.getOne();
```

Repository 를 이용해서 `queryBuilder` 를 작성하는 방식이다.
여기서 `createQueryBuilder("user")` 에서 user 는 SQL alias 이다. 

mysql 예로 들자면 `SELECT users AS user` 이런 느낌이라고 할 수 있다.

하나의 `querybuilder` 는 한개의 alias 만 가질 수 있는게 아니라 __여러개의 alias__ 를 가질 수 있다.

여러 테이블마다 alias 를 가지게 할 수 있고, 여러 테이블을 join 할 수도 있다.

DB 에서 단일한 결과를 가져오려면 `.getOne()` 을 사용하고 , 여러 개의 결과를 가지고 오려면 `.getMany()` 를 사용하면 된다.

특정 데이터를 가져와야할 땐 (ex. sum)
`.getRawOne()` 이나 `.getRawMany()` 를 사용해서 결과값을 가져온다.

## QueryBuilder 사용시 중요한 사항

`QueryBuilder` 를 사요할때 , `WHERE` 조건에 부합하는 파라미터를 입력해야한다.
지금 보이는 코드는 동작하지 않는다.

```TypeScript
const result = await getConnection()
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.linkedSheep', 'linkedSheep')
    .leftJoinAndSelect('user.linkedCow', 'linkedCow')
    .where('user.linkedSheep = :id', { id: sheepId })
    .andWhere('user.linkedCow = :id', { id: cowId });
```

그리고 밑에 코드를 보게 되면 

```ts
const result = await getConnection()
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.linkedSheep', 'linkedSheep')
    .leftJoinAndSelect('user.linkedCow', 'linkedCow')
    .where('user.linkedSheep = :sheepId', { sheepId })
    .andWhere('user.linkedCow = :cowId', { cowId });
```
딕셔너리로 `{id : sheepId}` 를 넣어도 되지만 
`:sheepId` 또는 `cowId` 같은 고융한 이름을 지정해서 사용할 수도 있습니다.

## How to create and use a `QueryBuilder`

`Query Builder` 를 작성하는데 여러 방법이 존재한다.

* Using connection:

    ```typescript
    import {getConnection} from "typeorm";

    const user = await getConnection()
        .createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    ```

* Using entity manager:

    ```typescript
    import {getManager} from "typeorm";

    const user = await getManager()
        .createQueryBuilder(User, "user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    ```

* Using repository:

    ```typescript
    import {getRepository} from "typeorm";

    const user = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    ```

## getRepository 와 Repository
>`getRepository` 말고 `Repository` 도 있는데 ,
`getRepository` 내부를 보면 return 으로 `Repository` 를 return 하는걸 확인할 수 있다.

> 그러면 드는생각이 어떠한 경우에 `getRepository` 를 사용하고 어떤경우엔
`Repository`를 사용해야할까?? 

> 생성자에서 @InjectRepository 를 한다거나 @Inject 걸어둔게 있다면 this 로 불러 올수있지만
그게 아닐땐 `getRepository` 로 const user = await getConnection() 으로 불러오면 된다.



5가지 `QueryBuilder` 타입 유형이 있다.

* `SelectQueryBuilder` - SELECT 쿼리를 작성하고 실행하는 데 사용됩니다. 예시

    ```typescript
    import {getConnection} from "typeorm";

    const user = await getConnection()
        .createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    ```

* `InsertQueryBuilder` - INSERT 쿼리를 작성하고 실행하는 데 사용됩니다. 예시:

    ```typescript
    import {getConnection} from "typeorm";

    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { firstName: "Timber", lastName: "Saw" },
            { firstName: "Phantom", lastName: "Lancer" }
         ])
        .execute();
    ```

* `UpdateQueryBuilder` - UPDATE 쿼리를 빌드하고 실행하는 데 사용됩니다. 예시:
    ```typescript
    import {getConnection} from "typeorm";

    await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({ firstName: "Timber", lastName: "Saw" })
        .where("id = :id", { id: 1 })
        .execute();
    ```
* `DeleteQueryBuilder` - used to build and execute DELETE queries. Example:

    ```typescript
    import {getConnection} from "typeorm";

    await getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: 1 })
        .execute();
    ```

* `RelationQueryBuilder` - 관계별 작업을 빌드하고 실행하는 데 사용됩니다[TBD].

You can switch between different types of query builder within any of them,
once you do, you will get a new instance of query builder (unlike all other methods).

## `QueryBuilder`를 사용하여 값 가져오기

예를 들어 ID 또는 이름으로 사용자의 단일 결과를 데이터베이스에서 가져오려면 `getOne` 을 사용해야 한다.

```typescript
const timber = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id OR user.name = :name", { id: 1, name: "Timber" })
    .getOne();
```

`getOneOrFail`은 데이터베이스에서 단일 결과를 가져오지만 결과가 없으면 `EntityNotFoundError`가 발생합니다.

```typescript
const timber = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id OR user.name = :name", { id: 1, name: "Timber" })
    .getOneOrFail();
```

예를 들어 데이터베이스에서 모든 사용자를 가져오려면 데이터베이스에서 여러 결과를 얻으려면 `getMany`를 사용하십시오.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .getMany();
```

쿼리 빌더 `select` 를 사용하여 얻을 수 있는 두가지 유형이 있다.
`entities` 와 `raw results` 
하지만 대부분의 경우 데이터베이스에서 실제 entities 를 select 해야한다.
그럴땐 `getOne` 및 `getMany` 를 사용한다.
그러나 때때로 모든 사용자 사진의 합계를 가져온다고 하면 
이 데이터는 엔터티가 아니면 원시 데이터라고 하면 , 
원서 데이터를 얻으려면 `getRawOn` 및 `getRawMany` 를 사용하게 된다.

```typescript
const { sum } = await getRepository(User)
    .createQueryBuilder("user")
    .select("SUM(user.photosCount)", "sum")
    .where("user.id = :id", { id: 1 })
    .getRawOne();
```

```typescript
const photosSums = await getRepository(User)
    .createQueryBuilder("user")
    .select("user.id")
    .addSelect("SUM(user.photosCount)", "sum")
    .groupBy("user.id")
    .getRawMany();

// result will be like this: [{ id: 1, sum: 25 }, { id: 2, sum: 13 }, ...]
```

## alias은 무엇이냐

우리는 `createQueryBuilder("user")` 를 사용했다 
여기서 `"user"` 는 뭘까 ?? 일반 SQL 사용했을때의 별칭이라고 생각하면 된다.

`createQueryBuilder("user")` 다음과 같이 사용합니다.

```typescript
createQueryBuilder()
    .select("user")
    .from(User, "user")
```

그러면 다음과 같은 SQL 쿼리가 생성됩니다.

```sql
SELECT ... FROM users user
```

이 SQL 쿼리에서 users 는 테이블 이름이고 , user 는 이 테이블에 할당한 별칭이다.
이 별칭을 사용하여 테이블에 액세스 하게 된다.

```typescript
createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.name = :name", { name: "Timber" })
```
다음 SQL 쿼리를 생성합니다.

```sql
SELECT ... FROM users user WHERE user.name = 'Timber'
```

쿼리 작성기를 만들 때 할당한 사용자 별칭을 사용하여 users 테이블을 사용했습니다

하나의 쿼리 빌더는 하나의 별칭으로 제한되지 않으며 여러 별칭을 가질 수 있습니다.
각 선택에는 고유한 별칭이 있을 수 있으며, 각각 고유한 별칭이 있는 여러 테이블에서 선택할 수 있으며, 각각 고유한 별칭이 있는 여러 테이블을 조인할 수 있습니다.
이러한 별칭을 사용하여 선택 중인 테이블(또는 선택 중인 데이터)에 액세스할 수 있습니다.

## 매개변수를 사용하여 데이터 이스케이프

We used `where("user.name = :name", { name: "Timber" })`.
What does `{ name: "Timber" }` stand for? It's a parameter we used to prevent SQL injection.
We could have written: `where("user.name = '" + name + "')`,
however this is not safe, as it opens the code to SQL injections.
The safe way is to use this special syntax: `where("user.name = :name", { name: "Timber" })`,
where `:name` is a parameter name and the value is specified in an object: `{ name: "Timber" }`.

```typescript
.where("user.name = :name", { name: "Timber" })
```

다음과 같이 사용할 수도 있다.

```typescript
.where("user.name = :name")
.setParameter("name", "Timber")
```

참고: 쿼리 빌더에서 다른 값에 대해 동일한 매개변수 이름을 사용하지 마십시오. 여러 번 설정하면 값이 무시됩니다.

특별한 확장 구문을 사용하여 값 배열을 제공하고 SQL 문에서 값 목록으로 변환하도록 할 수도 있습니다.

```typescript
.where("user.name IN (:...names)", { names: [ "Timber", "Cristal", "Lina" ] })
```

`raw query` 는 밑과 같다.

```sql
WHERE user.name IN ('Timber', 'Cristal', 'Lina')
```

## `WHERE` 표현식 추가

WHERE 표현식을 추가하는 것은 다음과 같이 쉽습니다.
```typescript
createQueryBuilder("user")
    .where("user.name = :name", { name: "Timber" })
```

Which will produce:

```sql
SELECT ... FROM users user WHERE user.name = 'Timber'
```

`AND` 를 통해서 `WHERE` 문을 추가 할 수가 있다.

```typescript
createQueryBuilder("user")
    .where("user.firstName = :firstName", { firstName: "Timber" })
    .andWhere("user.lastName = :lastName", { lastName: "Saw" });
```

다음을 생성합니다. `andWhere` 를 사용하지 않고 `where` 하나에 `string`으로 `and` 사용해도 된다.

> ex) where("user.firstName = :firstName AND ) 

```sql
SELECT ... FROM users user WHERE user.firstName = 'Timber' AND user.lastName = 'Saw'
```

기존 WHERE 표현식에 OR을 추가할 수 있습니다.

```typescript
createQueryBuilder("user")
    .where("user.firstName = :firstName", { firstName: "Timber" })
    .orWhere("user.lastName = :lastName", { lastName: "Saw" });
```

결과는 다음과 같이 나옵니다.

```sql
SELECT ... FROM users user WHERE user.firstName = 'Timber' OR user.lastName = 'Saw'
```

`WHERE` 표현식을 사용하여 `IN` 쿼리를 수행할 수 있습니다.

```typescript
createQueryBuilder("user")
    .where("user.id IN (:...ids)", { ids: [1, 2, 3, 4] })
```

그러면 다음 SQL 쿼리가 생성됩니다.

```sql
SELECT ... FROM users user WHERE user.id IN (1, 2, 3, 4)
```

`Brackets` 를 사용하여 기존 WHERE에 복잡한 WHERE 표현식을 추가할 수 있습니다.

```typescript
createQueryBuilder("user")
    .where("user.registered = :registered", { registered: true })
    .andWhere(new Brackets(qb => {
        qb.where("user.firstName = :firstName", { firstName: "Timber" })
          .orWhere("user.lastName = :lastName", { lastName: "Saw" })
    }))
```

`raw query` 결과입니다.

```sql
SELECT ... FROM users user WHERE user.registered = true AND (user.firstName = 'Timber' OR user.lastName = 'Saw')
```

필요한 만큼 AND 및 OR 표현식을 결합할 수 있습니다.

.where를 두 번 이상 사용하면 이전의 모든 WHERE 표현식을 무시하게 됩니다.


참고: `orWhere` 에 주의해야한다. `AND` 및 `OR` 표현식이 모두 포함된 복잡한 표현식을 사용하는 경우,
이러한 표현식이 출력되지 않을 수도 있다.
때로는 대신 where 문자열을 만들고 orWhere를 사용하지 않아야 합니다.

때때로 `orWhere` 를 사용하기 보다 그냥 where 문 `string` 을 쓰는것이 나을수도 있다

## Adding `HAVING` expression

다음과 같이 HAVING 표현식을 사용할 수가 있다.

```typescript
createQueryBuilder("user")
    .having("user.name = :name", { name: "Timber" })
```

`raw query` 결과

```sql
SELECT ... FROM users user HAVING user.name = 'Timber'
```

기존 `HAVING` 표현식에 `AND` 을 추가할 수 있습니다.

```typescript
createQueryBuilder("user")
    .having("user.firstName = :firstName", { firstName: "Timber" })
    .andHaving("user.lastName = :lastName", { lastName: "Saw" });
```

`raw query` 결과

```sql
SELECT ... FROM users user HAVING user.firstName = 'Timber' AND user.lastName = 'Saw'
```

기존 `HAVING` 표현식에 `OR` 을 추가할 수 있습니다.

```typescript
createQueryBuilder("user")
    .having("user.firstName = :firstName", { firstName: "Timber" })
    .orHaving("user.lastName = :lastName", { lastName: "Saw" });
```

`raw query` 결과

```sql
SELECT ... FROM users user HAVING user.firstName = 'Timber' OR user.lastName = 'Saw'
```

필요한 만큼 `AND` 및 `OR` 표현식을 결합할 수 있습니다.

`.having` 를 두 번 이상 사용하면 이전의 모든 HAVING 표현식을 재정의합니다.

## Adding `ORDER BY` expression

`ORDER BY` 표현식을 사용할수가 있다.

```typescript
createQueryBuilder("user")
    .orderBy("user.id")
```

`raw query` 결과

```sql
SELECT ... FROM users user ORDER BY user.id
```

오름차순에서 내림차순으로(또는 그 반대로) 순서를 변경할 수 있습니다.

```typescript
createQueryBuilder("user")
    .orderBy("user.id", "DESC")

createQueryBuilder("user")
    .orderBy("user.id", "ASC")
```

여러 주문 기준을 추가할 수 있습니다.
```ts
orderBy("user.name").addOrderBy("user.id");
```

하게되면 우선적으로 `user.name` 순으로 정렬하게 되고 그다음으로 `user.id` 순으로 정렬하게 된다.

```typescript
createQueryBuilder("user")
    .orderBy("user.name")
    .addOrderBy("user.id");
```

다음과 같이 order-by 필드 맵을 사용할 수도 있습니다.

```typescript
createQueryBuilder("user")
    .orderBy({
        "user.name": "ASC",
        "user.id": "DESC"
    });
```


`.orderBy`를 두 번 이상 사용하면 이전의 모든 ORDER BY 표현식을 재정의하게 됩니다.

## Adding `DISTINCT ON` expression (Postgres only)
주문 기준 표현식과 구별 설정을 모두 사용하는 경우 구별 설정 표현식은 가장 왼쪽의 주문 기준과 일치해야 합니다.
구별되는 표현식은 order-by와 동일한 규칙을 사용하여 해석됩니다. order-by 표현식 없이 distinct-on을 사용하면 각 세트의 첫 번째 행을 예측할 수 없음을 의미합니다.

DISTINCT ON 표현식은 다음과 같다.

```typescript
createQueryBuilder("user")
    .distinctOn(["user.id"])
    .orderBy("user.id")
```

`raw query` 결과

```sql
SELECT DISTINCT ON (user.id) ... FROM users user ORDER BY user.id
```

## GROUP BY 표현식 추가

`GROUP BY` 표현식은 다음과 같다.

```typescript
createQueryBuilder("user")
    .groupBy("user.id")
```

`raw query` 결과

```sql
SELECT ... FROM users user GROUP BY user.id
```

그룹 기준 기준을 더 추가하려면 `addGroupBy` 를 사용하십시오.

```typescript
createQueryBuilder("user")
    .groupBy("user.name")
    .addGroupBy("user.id");
```

`.groupBy` 를 두 번 이상 사용하면 이전의 모든 `GROUP BY` 표현식을 재정의하게 됩니다.

## Adding `LIMIT` expression

LIMIT 표현식을 추가하는 것은 다음과 같다

```typescript
createQueryBuilder("user")
    .limit(10)
```

`raw query` 결과

```sql
SELECT ... FROM users user LIMIT 10
```

결과 SQL 쿼리는 데이터베이스 유형(SQL, mySQL, Postgres 등)에 따라 다릅니다.
참고: 조인 또는 하위 쿼리가 있는 복잡한 쿼리를 사용하는 경우 `LIMIT`가 예상대로 작동하지 않을 수 있습니다.
페이지 매김을 사용하는 경우 대신 `take`를 사용하는 것이 좋습니다.

## Adding `OFFSET` expression

`OFFSET` 표현식을 추가하는 것은 다음과 같다

```typescript
createQueryBuilder("user")
    .offset(10)
```

`raw query` 결과

```sql
SELECT ... FROM users user OFFSET 10
```

결과 SQL 쿼리는 데이터베이스 유형(SQL, mySQL, Postgres 등)에 따라 다릅니다.

참고: 조인 또는 하위 쿼리가 있는 복잡한 쿼리를 사용하는 경우 `OFFSET`이 예상대로 작동하지 않을 수 있습니다.

`pagination` 을 사용하는 경우 대신 `skip`을 사용하는 것이 좋습니다.

## Joining relations

다음 엔터티가 있다고 가정해 보겠습니다.

```typescript
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Photo} from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Photo, photo => photo.user)
    photos: Photo[];
}
```

```typescript
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(type => User, user => user.photos)
    user: User;
}
```

이제 사용자 "Timber"를 그의 모든 사진과 함께 데이터를 가져올려고 한다고 가정해 보겠습니다.

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .where("user.name = :name", { name: "Timber" })
    .getOne();
```

다음과 같은 결과를 얻을 수 있습니다.

```typescript
{
    id: 1,
    name: "Timber",
    photos: [{
        id: 1,
        url: "me-with-chakram.jpg"
    }, {
        id: 2,
        url: "me-with-trees.jpg"
    }]
}
```
보시다시피 `leftJoinAndSelect` 는 Timber의 모든 사진을 자동으로 로드합니다.
첫 번째 인수는 로드하려는 관계이고 두 번째 인수는 이 관계의 테이블에 할당하는 별칭입니다.
쿼리 작성기의 모든 위치에서 이 별칭을 사용할 수 있습니다. 
예를 들어, 제거되지 않은 Timber의 photos 를 모두 가져옵니다.

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .where("user.name = :name", { name: "Timber" })
    .andWhere("photo.isRemoved = :isRemoved", { isRemoved: false })
    .getOne();
```

그러면 다음과 같은 SQL 쿼리가 생성됩니다.

```sql
SELECT user.*, photo.* FROM users user
    LEFT JOIN photos photo ON photo.user = user.id
    WHERE user.name = 'Timber' AND photo.isRemoved = FALSE
```

`"where"` 를 사용하는 대신 조인 표현식에 조건을 추가할 수도 있습니다.

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo", "photo.isRemoved = :isRemoved", { isRemoved: false })
    .where("user.name = :name", { name: "Timber" })
    .getOne();
```

그러면 다음과 같은 SQL 쿼리가 생성됩니다.

```sql
SELECT user.*, photo.* FROM users user
    LEFT JOIN photos photo ON photo.user = user.id AND photo.isRemoved = FALSE
    WHERE user.name = 'Timber'
```

## Inner and left joins

If you want to use `INNER JOIN` instead of `LEFT JOIN` just use `innerJoinAndSelect` instead:

```typescript
const user = await createQueryBuilder("user")
    .innerJoinAndSelect("user.photos", "photo", "photo.isRemoved = :isRemoved", { isRemoved: false })
    .where("user.name = :name", { name: "Timber" })
    .getOne();
```

This will generate:

```sql
SELECT user.*, photo.* FROM users user
    INNER JOIN photos photo ON photo.user = user.id AND photo.isRemoved = FALSE
    WHERE user.name = 'Timber'
```

`LEFT JOIN`과 `INNER JOIN`의 차이점은 `INNER JOIN`은 사진이 없는 경우 사용자를 반환하지 않는다는 것입니다.

`LEFT JOIN`은 사진이 없더라도 사용자를 반환합니다.
`다양한 조인 유형` 에 대해 자세히 알아보려면 SQL 설명서를 참조하십시오.
[SQL documentation](https://msdn.microsoft.com/en-us/library/zt8wzxy4.aspx).

## Join without selection

데이터를 선택하지 않고 조인할 수 있습니다.
그렇게 하려면 `leftJoin` 또는 `innerJoin` 을 사용하십시오.

```typescript
const user = await createQueryBuilder("user")
    .innerJoin("user.photos", "photo")
    .where("user.name = :name", { name: "Timber" })
    .getOne();
```

그러면 다음이 생성됩니다.

```sql
SELECT user.* FROM users user
    INNER JOIN photos photo ON photo.user = user.id
    WHERE user.name = 'Timber'
```

사진이 있는 경우 Timber가 선택되지만 사진은 반환되지 않습니다.
`select user.*` 라고 했으니 `user` 에 대한 데이터만 불러오게 된다.

## Joining any entity or table

관계뿐만 아니라 다른 관련 없는 엔터티나 테이블도 조인할 수 있습니다. 예:

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect(Photo, "photo", "photo.userId = user.id")
    .getMany();
```

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndSelect("photos", "photo", "photo.userId = user.id")
    .getMany();
```

## Joining and mapping functionality

`profilePhoto`를 `User` 엔터티에 추가하고 `QueryBuilder` 를 사용하여 모든 데이터를 해당 속성에 매핑할 수 있습니다.

```typescript
export class User {    
    /// ...
    profilePhoto: Photo;

}
```

```typescript
const user = await createQueryBuilder("user")
    .leftJoinAndMapOne("user.profilePhoto", "user.photos", "photo", "photo.isForProfile = TRUE")
    .where("user.name = :name", { name: "Timber" })
    .getOne();
```

그러면 Timber의 프로필 사진이 로드되어 `user.profilePhoto`로 설정됩니다.
단일 엔티티를 로드하고 매핑하려면 `leftJoinAndMapOne`을 사용하십시오. 여러 엔터티를 로드하고 매핑하려면 `leftJoinAndMapMany`를 사용하세요.

## Getting the generated query

때때로 `QueryBuilder`에 의해 생성된 SQL 쿼리를 얻고 싶을 수 있습니다. 이렇게 하려면 `getSql` 을 사용하십시오.

```typescript
const sql = createQueryBuilder("user")
    .where("user.firstName = :firstName", { firstName: "Timber" })
    .orWhere("user.lastName = :lastName", { lastName: "Saw" })
    .getSql();
```

디버깅 목적으로 `printSql`을 사용할 수 있습니다.

```typescript
const users = await createQueryBuilder("user")
    .where("user.firstName = :firstName", { firstName: "Timber" })
    .orWhere("user.lastName = :lastName", { lastName: "Saw" })
    .printSql()
    .getMany();
```

이 쿼리는 사용자를 반환하고 사용된 SQL 문을 콘솔에 인쇄합니다.

## Getting raw results
선택 쿼리 빌더를 사용하여 얻을 수 있는 결과에는 엔터티와 원시 결과의 두 가지 유형이 있습니다.
대부분의 경우 데이터베이스에서 실제 엔터티(예: 사용자)를 선택해야 합니다. 이를 위해 getOne 및 getMany를 사용합니다.

그러나 모든 사용자 사진의 합계와 같은 특정 데이터를 선택해야 하는 경우가 있습니다. 이러한 데이터는 엔터티가 아니며 원시 데이터라고 합니다. 원시 데이터를 얻으려면 `getRawOne` 및 `getRawMany` 를 사용합니다. 예:

```typescript
const { sum } = await getRepository(User)
    .createQueryBuilder("user")
    .select("SUM(user.photosCount)", "sum")
    .where("user.id = :id", { id: 1 })
    .getRawOne();
```

```typescript
const photosSums = await getRepository(User)
    .createQueryBuilder("user")
    .select("user.id")
    .addSelect("SUM(user.photosCount)", "sum")
    .groupBy("user.id")
    .getRawMany();

// result will be like this: [{ id: 1, sum: 25 }, { id: 2, sum: 13 }, ...]
```

## Streaming result data

스트림을 반환하는 스트림을 사용할 수 있습니다.
스트리밍은 원시 데이터를 반환하므로 엔터티 변환을 수동으로 처리해야 합니다.
트리밍은 원시 데이터를 반환하므로 엔터티 변환을 수동으로 처리해야 합니다.

```typescript
const stream = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .stream();
```

## Using pagination

애플리케이션을 개발할 때 대부분의 경우 `pagination`이 필요합니다.
애플리케이션에 `pagination` , `page slider` 또는 `무한 스크롤 구성 요소`가 있는 경우에 사용됩니다.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .take(10)
    .getMany();
```

이렇게 하면 `photos`와 함께 처음 10명의 `users` 가 출력된다.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .skip(10)
    .getMany();
```

이렇게 하면 `photo`가 join 된 사용자를 불러오는데

처음 10명의 사용자를 제외한 사용자를 불러옵니다.

다음과 같은 방법을 결합할 수 있습니다.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.photos", "photo")
    .skip(5)
    .take(10)
    .getMany();
```

이렇게 하면 처음 5명의 사용자를 건너뛰고 10명의 사용자데이터를 불러오게 됩니다.

`take` 와 `skip` 은 `limit` 과 `offset` 을 사용하는 것처럼 보일 수 있지만 실제로는 그렇지 않습니다.

`limit` 및 `offset` 은 조인 또는 하위 쿼리가 포함된 더 복잡한 쿼리가 있는 경우 예상대로 작동하지 않을 수 있습니다. `take` and `skip` 을 사용하면 이러한 문제를 방지할 수 있습니다.

## Set locking

`QueryBuilder` 는 낙관적 잠금과 비관적 잠금을 모두 지원합니다. 비관적 읽기 잠금을 사용하려면 다음과 같이 사용해야 합니다.

그런데 이것은 언제 사용하는것일까 ??....

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .setLock("pessimistic_read")
    .getMany();
```

비관적 쓰기 잠금을 사용하려면 다음 방법을 사용하십시오.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .setLock("pessimistic_write")
    .getMany();
```

`dirty read` 잠금을 사용하려면 다음 방법을 사용하십시오.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .setLock("dirty_read")
    .getMany();
```

낙관적 잠금을 사용하려면 다음 방법을 사용하십시오.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .setLock("optimistic", existUser.version)
    .getMany();
```

낙관적 잠금은 `@Version` 및 `@UpdatedDate` 데코레이터와 함께 작동합니다

`setLock` 메서드는 사용해본적이 없어서 , 사용해본 사례가 있다면 update 할 생각이다.

## Max execution time

We can drop slow query to avoid crashing the server. Only MySQL driver is supported at the moment:

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .maxExecutionTime(1000) // milliseconds.
    .getMany();
```

## Partial selection

일부 엔터티 속성만 선택할때는 다음과 같이 리스트를 사용하면 된다.

```typescript
const users = await getRepository(User)
    .createQueryBuilder("user")
    .select([
        "user.id",
        "user.name"
    ])
    .getMany();
```

위의 코드는 `User`의 `id` 와 `name`만 가져오는 코드이다.

## Using subqueries


하위 쿼리(서브쿼리) 를 쉽게 만들 수 있습니다. 하위 쿼리는 `FROM` , `WHERE` 및 `JOIN` 식에서 지원됩니다. 

예시:

```typescript
const qb = await getRepository(Post).createQueryBuilder("post");
const posts = qb
    .where("post.title IN " + qb.subQuery().select("user.name").from(User, "user").where("user.registered = :registered").getQuery())
    .setParameter("registered", true)
    .getMany();
```

같은 결과지만 다음과 같은 결과를 좀 더 효율적은 방법으로 코드를 작성할 수 있습니다.

```typescript
const posts = await connection.getRepository(Post)
    .createQueryBuilder("post")
    .where(qb => {
        const subQuery = qb.subQuery()
            .select("user.name")
            .from(User, "user")
            .where("user.registered = :registered")
            .getQuery();
        return "post.title IN " + subQuery;
    })
    .setParameter("registered", true)
    .getMany();
```

다른 대안으로는 별도의 쿼리 빌더를 만들고 생성된 SQL 을 사용할 수가 있다.

```typescript
const userQb = await connection.getRepository(User)
    .createQueryBuilder("user")
    .select("user.name")
    .where("user.registered = :registered", { registered: true });

const posts = await connection.getRepository(Post)
    .createQueryBuilder("post")
    .where("post.title IN (" + userQb.getQuery() + ")")
    .setParameters(userQb.getParameters())
    .getMany();
```

다음과 같이 `FROM` 에서 하위 쿼리(서브쿼리) 를 만들 수 있습니다.

```typescript
const userQb = await connection.getRepository(User)
    .createQueryBuilder("user")
    .select("user.name", "name")
    .where("user.registered = :registered", { registered: true });

const posts = await connection
    .createQueryBuilder()
    .select("user.name", "name")
    .from("(" + userQb.getQuery() + ")", "user")
    .setParameters(userQb.getParameters())
    .getRawMany();
```

아니면 다른 방법으로는 

```typescript
const posts = await connection
    .createQueryBuilder()
    .select("user.name", "name")
    .from(subQuery => {
        return subQuery
            .select("user.name", "name")
            .from(User, "user")
            .where("user.registered = :registered", { registered: true });
    }, "user")
    .getRawMany();
```


하위 선택을 "second from(두번째에서)" 로 추가하려면 `addFrom` 을 사용하십시오.
`SELECT` 문에서도 `subselect`를 사용할 수 있습니다.

```typescript
const posts = await connection
    .createQueryBuilder()
    .select("post.id", "id")
    .addSelect(subQuery => {
        return subQuery
            .select("user.name", "name")
            .from(User, "user")
            .limit(1);
    }, "name")
    .from(Post, "post")
    .getRawMany();
```
## Hidden Columns

쿼리하는 모델에 `select: false` column 이 있는 경우 열에서 정보를 검색하려면 `addSelect` 함수를 사용해야 합니다.

다음과 같이 `entity` 가 있다고 가정하면

```typescript
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({select: false})
    password: string;
}
```

일반적인 `find` 또는 `query` 를 사용하면 모델에 대한 `password` 를 받지 못합니다.
그러나 다음을 수행하는 경우:

```typescript
const users = await connection.getRepository(User)
    .createQueryBuilder()
    .select("user.id", "id")
    .addSelect("user.password")
    .getMany();
```

만약에 `addSelect` 를 사용하게 된다면 `password` 도 같이 받을 수 있습니다.