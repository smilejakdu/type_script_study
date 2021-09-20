# 📌 Quilery Builder CRUD

## ✅ Create ( insert )

https://orkhan.gitbook.io/typeorm/docs/insert-query-builder#raw-sql-support

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .insert()
  .into(User)
  .values([
    { firstName: "Timber", lastName: "Saw" },
    { firstName: "Phantom", lastName: "Lancer" },
  ])
  .execute();
```

위의 방법을 사용하게되면 , 대량으로 `insert` 할수도 있습니다.

## ✅ Update

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .update(User)
  .set({ firstName: "Timber", lastName: "Saw" })
  .where("id = :id", { id: 1 })
  .execute();
```

## ✅ Select

https://orkhan.gitbook.io/typeorm/docs/select-query-builder

종류가 너무나도 많다 . 우선 간단하게 가져오는것부터 확인해보자.

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .where("user.id = :id", { id: 1 })
  .getOne();
```

하나를 가져올땐 `getOne()` 을 사용하면 된다.

좀더 자세히 보고싶다면

[querybuilder select](https://github.com/smilejakdu/typescript_study/blob/main/typeorm/queryBuilder_select.md)

참고하면 된다.

`select` 해서 너무 불필요한 데이터를 가져온다 싶으면

```ts
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .select(["user.id", "user.firstName"])
  .where("user.id = :id", { id: 1 })
  .getOne();
```

원하는 정보만 가져올 수 있다.

## ✅ Delete

```ts
import { getConnection } from "typeorm";

await getConnection()
  .createQueryBuilder()
  .delete()
  .from(User)
  .where("id = :id", { id: 1 })
  .execute();
```
