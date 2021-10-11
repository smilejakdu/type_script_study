# select 전반 기능 훑어보기

https://www.yalco.kr/@sql/1-1/

테스트 : https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_all

- [원하는 만큼만 데이터 가져오기](#원하는-만큼만-데이터-가져오기)
- [원하는 순서로 데이터 가져오기](#원하는-순서로-데이터-가져오기)
- [연산자](#연산자)

# 원하는 만큼만 데이터 가져오기

`LIMIT{가져올 갯수}` 또는 `LIMIT {거넌뛸 갯수}`,`{가져올 갯수}` 를 사용하여 , 원하는 위치에서 원하는 만큼만 데이터를 가져올 수 있다.

```sql
SELECT * FROM Customers
LIMIT 10;
```

1 부터 10 까지 데이터를 가져오게 된다.

```sql
SELECT * FROM Customers
LIMIT 5, 10;
```

5 부터 10개 데이터를 가져오게 된다. 착각 하지 말아야할것이
5부터 10까지 들어 오는것이 아니라 , 5부터 10개를 들고오게 되는것이다.

```sql
SELECT * FROM Customers
LIMIT 30, 10;
```

이렇게 되면 30부터 10개 데이터를 들어오게 된다.

# 원하는 순서로 데이터 가져오기

`ORDER BY` 구문을 사용해서 특정 컬럼을 기준으로 데이터를 정렬할 수 있다.
|구문|기준|기본|
|------|---|---|
|ASC|오름차순|default|
|DESC|내림차순||

```sql
SELECT * FROM OrderDetails
ORDER BY ProductID ASC, Quantity DESC;
```

하게되면 ,`Quantity` 칼럼 내림차순 `ProductID` 오름차순 으로 정렬해서 출력하게 된다.

# 연산자

| 연산자  | 의미                             |
| ------- | -------------------------------- |
| =       | 양쪽 값이 같음                   |
| !=,<>   | 양쪽 값이 다름                   |
| > , <   | (왼쪽 , 오른쪽) 값이 더 큼       |
| >= , <= | (왼쪽 , 오른쪽) 값이 같거나 더큼 |

```sql
SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE;
```

참고로 `MySQL` 의 기본 사칙연산자는 대소문자 구분을 하지 않는다.

```sql
SELECT 'A' = 'a';
```

# 그룹함수

| 함수                        | 설명                        |
| --------------------------- | --------------------------- |
| MAX                         | 가장 큰 값                  |
| MIN                         | 가장 작은 값                |
| COUNT                       | 갯수(NULL값 제외)           |
| SUM                         | 총합                        |
| AVG                         | 평균 값                     |
| BETWEEN {MIN} AND {MAX}     | 두 값 사이에 있음           |
| NOT BETWEEN {MIN} AND {MAX} | 두 값 사이가 아닌 곳에 있음 |

```sql
SELECT
  MAX(Quantity),
  MIN(Quantity),
  COUNT(Quantity),
  SUM(Quantity),
  AVG(Quantity)
FROM OrderDetails
WHERE OrderDetailID BETWEEN 20 AND 30;
```

# 조건에 따라 그룹으로 묶기

```sql
SELECT
  Country, City,
  CONCAT_WS(', ', City, Country) as City_Country
FROM Customers
GROUP BY Country, City;
```

그룹 바이를 하게되면 ,

| Country   | City         | City_Country            |
| --------- | ------------ | ----------------------- |
| Argentina | Buenos Aires | Buenos Aires, Argentina |
| Austria   | Graz         | Graz, Austria           |
| Austria   | Salzburg     | Salzburg, Austria       |
| Belgium   | Bruxelles    | Bruxelles, Belgium      |
