# 📌 where 
```ts
const user = await getRepository(User)
 .createQueryBuilder('user')
 .leftJoinAndSelect('user.boards','board') 
 .where('user.nickname = :nickname',{nickname:'ash'})
 .getOne();
```

# 📌 where LIKE

```ts
const board =  this.boardsRepository.createQueryBuilder('boards')
  .leftJoin('boards.User' , 'user')
  .where('boards.title LIKE :title OR baords.title LIKE :title',{title:'ash'})
  .getMany();
  return board
```

# 📌 where LIKE AND

```ts
const board =  this.boardsRepository.createQueryBuilder('boards')
  .leftJoin('boards.User' , 'user')
  .where('boards.title LIKE :title OR baords.content LIKE :content',{title:'ash' , content:'ash'})
  .getMany();
```