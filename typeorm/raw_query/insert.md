- [insert](#insert-직접넣기)
- [insert](#insert-특정칼럼에만넣기)
- [insert select](#insert-select)

# insert 직접넣기

```sql
INSERT INTO users VALUES('ash', '3');
```

# insert 특정칼럼에만넣기

```sql
INSERT INTO users (nickname , age) VALUES('ash', '3');
```

# insert select

```sql
INSERT INTO users_history (nickname, age) SELECT nickname, age FROM users ORDER BY user_idx
```
