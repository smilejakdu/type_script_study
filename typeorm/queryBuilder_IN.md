# 📌 where IN
  ```ts	
let board =  this.boardsRepository.createQueryBuilder('boards')
  .select('boards.id')
  .leftJoin('boards.User' , 'user')
  .andWhere('boards.title IN (:...title)' ,{title : ['bob_title_1' , 'bob_title_2']})
  .getMany();
```

# 📌 andWhereInIds 


```ts
let board =  this.boardsRepository.createQueryBuilder('boards')
  .select('boards.id')
  .leftJoin('boards.User' , 'user')
  .andWhereInIds([1,2,3])
  .getMany();
```