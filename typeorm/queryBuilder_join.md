# 📌 Entity

우선 가정을 하자 `user` 가 있으며 `board` 가 있다. 그리고 
`board` 에는 여러 `comment` 가 있을것이다.

__user__
```ts
@Entity({ schema: 'nest_watcha', name: 'users' })
export class Users extends CoreEntity{
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: 'ash',
		description: 'nickname',
	})
	@Column('varchar', { name: 'nickname', length: 80 })
	nickname: string;

	@IsString()
	@IsNotEmpty()
	@Column('varchar', { name: 'password', length: 150, select: false }) // select: false 하면 password 빼고 불러온다.
	password: string;

	@OneToMany(() => Boards, boards => boards.User)
	UserToBoards: Boards[];

	@OneToMany(() => Comments, comments => comments.User)
	UserToComments: Comments[];

	@OneToMany(() => Schedules, schedules => schedules.User)
	UserToSchedules: Schedules[];
}
```

__board__
```ts
@Entity({ schema: 'nest_watcha', name: 'boards' })
export class Boards extends CoreEntity{
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: 'title',
		description: 'title',
	})
	@Column('varchar', { name: 'title', length: 100 })
	title: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: 'content',
		description: 'content',
	})
	@Column('varchar', { name: 'content', length: 500 })
	content: string;

	@IsString()
	@ApiProperty({
		example: 'imagePath',
		description: 'imagePath',
	})
	@Column('varchar', { name: 'imagePath', length: 250 })
	imagePath: string;

	@Column('int', { name: 'UserId', nullable: true })
	UserId: number | null;
	
	@IsNotEmpty()
	@ManyToOne(() => Users, users => users.UserToBoards, {
		onDelete: 'SET NULL',
		onUpdate: 'CASCADE',
	})
	@JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
	User: Users;

	@OneToMany(() => Comments, comments => comments.Board)
	Comments: Comments[];
}
```

__comments__

```ts
@Entity({ schema: 'nest_watcha', name: 'comments' })
export class Comments extends CoreEntity {
	@IsString()
	@IsNotEmpty()
	@ApiProperty({
		example: 'content',
		description: 'content',
	})
	@Column('varchar', { name: 'content', length: 500 })
	content: string;

	@Column('int', { name: 'BoardId', nullable: true })
	BoardId: number | null;

	@Column('int', { name: 'UserId', nullable: true })
	UserId: number | null;

	@ManyToOne(() => Users, users => users.UserToComments, {
		onDelete: 'SET NULL',
		onUpdate: 'CASCADE',
	})
	@JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
	User: Users;

	@ManyToOne(() => Boards, boards => boards.Comments, {
		onDelete: 'SET NULL',
		onUpdate: 'CASCADE',
	})
	@JoinColumn([{ name: 'BoardId', referencedColumnName: 'id' }])
	Board: Boards;
}
```


## ✅ leftJoin

```ts
const user = await getRepository(User)
 .createQueryBuilder('user')
 .leftJoin('user.boards','board') 
 .where('user.id = :userId',{userId:1})
 .getOne();
```

```
[
    {
        "id": 9,
        "createdAt": "2021-09-14T06:02:35.106Z",
        "updatedAt": "2021-09-14T06:02:35.106Z",
        "deletedAt": null,
        "title": "bob_title_1",
        "content": "bob_content_1",
        "imagePath": "",
        "UserId": 2
    },
    {
        "id": 10,
        "createdAt": "2021-09-14T06:02:44.867Z",
        "updatedAt": "2021-09-14T06:02:44.867Z",
        "deletedAt": null,
        "title": "bob_title_2",
        "content": "bob_content_2",
        "imagePath": "",
        "UserId": 2
    },
    {
        "id": 11,
        "createdAt": "2021-09-14T06:02:50.393Z",
        "updatedAt": "2021-09-14T06:02:50.393Z",
        "deletedAt": null,
        "title": "bob_title_3",
        "content": "bob_content_3",
        "imagePath": "",
        "UserId": 2
    }
]
```


## ✅ leftJoinAndSelect

```ts
const user = await getRepository(User)
 .createQueryBuilder('user')
 .leftJoinAndSelect('user.boards','board') 
 .where('user.id = :userId',{userId:1})
 .getOne();
```

```
[
    {
        "id": 9,
        "createdAt": "2021-09-14T06:02:35.106Z",
        "updatedAt": "2021-09-14T06:02:35.106Z",
        "deletedAt": null,
        "title": "bob_title_1",
        "content": "bob_content_1",
        "imagePath": "",
        "UserId": 2,
        "User": {
            "id": 2,
            "createdAt": "2021-09-14T06:00:11.803Z",
            "updatedAt": "2021-09-14T06:00:11.803Z",
            "deletedAt": null,
            "nickname": "bob"
        }
    },
    {
        "id": 10,
        "createdAt": "2021-09-14T06:02:44.867Z",
        "updatedAt": "2021-09-14T06:02:44.867Z",
        "deletedAt": null,
        "title": "bob_title_2",
        "content": "bob_content_2",
        "imagePath": "",
        "UserId": 2,
        "User": {
            "id": 2,
            "createdAt": "2021-09-14T06:00:11.803Z",
            "updatedAt": "2021-09-14T06:00:11.803Z",
            "deletedAt": null,
            "nickname": "bob"
        }
    },
    {
        "id": 11,
        "createdAt": "2021-09-14T06:02:50.393Z",
        "updatedAt": "2021-09-14T06:02:50.393Z",
        "deletedAt": null,
        "title": "bob_title_3",
        "content": "bob_content_3",
        "imagePath": "",
        "UserId": 2,
        "User": {
            "id": 2,
            "createdAt": "2021-09-14T06:00:11.803Z",
            "updatedAt": "2021-09-14T06:00:11.803Z",
            "deletedAt": null,
            "nickname": "bob"
        }
    }
]
```