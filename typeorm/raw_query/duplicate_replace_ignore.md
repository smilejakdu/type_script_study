# 📌 값이 없으면 Insert, 값이 있으면 Update - on duplicate key update
참고자료 : https://bamdule.tistory.com/112


## 테이블 만들기
```sql
CREATE TABLE user (
	id INT AUTO_INCREMENT primary KEY,
	user_name VARCHAR(50) UNIQUE KEY,
	price INT NOT NULL DEFAULT 0,
	cnt INT NOT NULL DEFAULT 0
);
```

## 데이터 삽입

```sql
INSERT INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0) 
ON DUPLICATE KEY UPDATE 
  price = price * 2, 
  cnt = cnt + 1;
```

데이터를 확인해 보면

```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  1 | ash       |  1000 |   0 |
+----+-----------+-------+-----+
```
한번 더 데이터를 삽입 할 경우
```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  1 | ash       |  2000 |   1 |
+----+-----------+-------+-----+
1 row in set (0.00 sec)
```

insert 가 되지않고 price , cnt 가 변경이 됬다.
데이터 삽입시 , 중복키 제약조건에 위배되면 `ON DUPLICATE KEY UPDATE` 아래에 지정한 필드가 수정된다. 

# 📌 replace

중복키 제약조건에 위배되면 해당 레코드를 삭제하고 다시 삽입한다.

```sql
REPLACE INTO user (user_name , price , cnt) VALUES ('ash',500,0)
```

```
mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  3 | ash       |   500 |   0 |
+----+-----------+-------+-----+
1 row in set (0.01 sec)
```

새롭게 다시 삽입이 된것을 볼수가 있다.
하지만 `id` 값을 2라고 예상했지만 3으로 되어있다.

앞서 우리가 `duplicate` 를 사용했는데 , `update` 했을시 , `auto_increment` 부분은 내부적으로 쌓이는것 같다.


# 📌 ignore

중복키 제약조건에 위배되면 `insert` 를 무시한다.
```sql
INSERT IGNORE INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0);
```

```
mysql> INSERT IGNORE INTO user (user_name, price, cnt) VALUES ('ash', 1000, 0);
Query OK, 0 rows affected, 1 warning (0.08 sec)

mysql> select * from user;
+----+-----------+-------+-----+
| id | user_name | price | cnt |
+----+-----------+-------+-----+
|  7 | ash       |   500 |   0 |
+----+-----------+-------+-----+
1 row in set (0.00 sec)
```
