# select 전반 기능 훑어보기

https://www.yalco.kr/@sql/1-1/

테스트 : https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_all

- [원하는 만큼만 데이터 가져오기](#원하는-만큼만-데이터-가져오기)
- [원하는 순서로 데이터 가져오기](#원하는-순서로-데이터-가져오기)
- [연산자](#연산자)
- [그룹함수](#그룹함수)
- [조건에 따라 그룹으로 묶기 GROUP BY](#조건에-따라-그룹으로-묶기-GROUP-BY)
- [WITH ROLLUP 전체의 집계값](#WITH-ROLLUP-전체의-집계값)
- [HAVING - 그룹화된 데이터 걸러내기](#HAVING-그룹화된-데이터-걸러내기)
- [조건문 IF 와 WHEN THEN](#조건문-IF-와-WHEN-THEN)

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

# 조건에 따라 그룹으로 묶기 GROUP BY

`GROUP BY` 는 말 그대로 묶는다는 얘기다

```sql
SELECT CategoryID
FROM Products
GROUP BY CategoryID;
```

위의 `sql` 은 `CategoryID` 기준으로 묶는다는 얘기이다.

```sql
SELECT CategoryID , ProductName
FROM Products
GROUP BY CategoryID;
```

으로 출력하게된다면 ? 별 의미없는 값이 출력된다.
그 이유는 `CategoryID` 값이 1인 것에 `ProductName` 이 Chais 만 있는것이 아니기때문이다.

| CategoryID | ProductName    |
| ---------- | -------------- |
| 1          | Chais          |
| 2          | Aniseed Syrup  |
| 3          | Pavlova        |
| 4          | Queso Cabrales |

```sql
SELECT
  Country, City,
  CONCAT_WS(', ', City, Country) as City_Country
FROM Customers
GROUP BY Country, City;
```

`GROUP BY` 를 한다는것은 어떠한 해당하는 값에 대한 함수를 돌리는것이기 때문에
대상하는 칼럼과 그 칼럼을 가지고 함수를 돌리는 것이 존재해야한다.

그룹 바이를 하게되면 ,

| Country   | City         | City_Country            |
| --------- | ------------ | ----------------------- |
| Argentina | Buenos Aires | Buenos Aires, Argentina |
| Austria   | Graz         | Graz, Austria           |
| Austria   | Salzburg     | Salzburg, Austria       |
| Belgium   | Bruxelles    | Bruxelles, Belgium      |

```sql
SELECT
  COUNT(*) as OrderDateCount ,
  OrderDate
FROM Orders
GROUP BY OrderDate;
```

`OrderDate` 기준으로 묶은 다음에 `OrderDate` 각 row 마다 몇개의 행들이 있었는지 출력하게 된다.

| OrderDateCount | OrderDate  |
| -------------- | ---------- |
| 1              | 1996-07-04 |
| 1              | 1996-07-05 |
| 2              | 1996-07-08 |
| 1              | 1996-07-09 |

```sql
SELECT
  ProductID,
  SUM(Quantity) AS QuantitySum
FROM OrderDetails
GROUP BY ProductID
ORDER BY QuantitySum DESC;
```

각 `ProductID` 마다 개 제품들의 갯수를 합한다는 얘기이다.

```sql
SELECT
  CategoryID,
  MAX(Price) AS MaxPrice,
  MIN(Price) AS MinPrice,
  TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
  TRUNCATE(AVG(Price), 2) AS AveragePrice
FROM Products
GROUP BY CategoryID;
```

다시 위의 코드를 해석해보면 `CategoryID` 로 묶은 다음에

`CategoryID` 마다의 최대가격 , 최소가격 , MedianPrice , 평균값이 출력된다.

| CategoryID | MaxPrice | MinPrice | MedianPrice | AveragePrice |
| ---------- | -------- | -------- | ----------- | ------------ |
| 1          | 263.50   | 4.50     | 134.00      | 37.97        |
| 2          | 43.90    | 10.00    | 26.95       | 23.06        |
| 3          | 81.00    | 9.20     | 45.10       | 25.16        |
| 4          | 55.00    | 2.50     | 28.75       | 28.73        |
| 5          | 38.00    | 7.00     | 22.50       | 20.25        |

# WITH ROLLUP 전체의 집계값

```sql
SELECT
  Country, COUNT(*)
FROM Suppliers
GROUP BY Country
WITH ROLLUP;
```

```sql
SELECT
  ProductID,
  SUM(Quantity) AS QuantitySum
FROM OrderDetails
GROUP BY ProductID
WITH ROLLUP;
```

row 다 합친 값이 끝에 출력이 된다.

# HAVING - 그룹화된 데이터 걸러내기

`HAVING` 도 `WHERE` 과 하는 역할은 비슷하지만

`WHERE` 는 그룹하기 전 데이터, `HAVING` 은 그룹 후 집계에 사용합니다.

이란 차이가 있다

이게 무슨 말이냐면 집계함수를 사용하고 계산하고 난 다음에 이것들을 가지고 조건문을 사용하게 될때,
`HAVING` 을 사용하게 된다.

```sql
SELECT
  COUNT(*) AS Count, OrderDate
FROM Orders
WHERE OrderDate > DATE('1996-12-31')
GROUP BY OrderDate
HAVING Count > 2;
```

```sql
SELECT
  CategoryID,
  MAX(Price) AS MaxPrice,
  MIN(Price) AS MinPrice,
  TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
  TRUNCATE(AVG(Price), 2) AS AveragePrice
FROM Products
WHERE CategoryID > 2
GROUP BY CategoryID
HAVING
  AveragePrice BETWEEN 20 AND 30
  AND MedianPrice < 40;
```

# 조건문 IF 와 WHEN THEN

| 형식           | 설명                               |
| -------------- | ---------------------------------- |
| IF(조건, T, F) | 조건이 참이라면 T, 거짓이면 F 반환 |

```sql
SELECT IF (1 > 2, '1는 2보다 크다.', '1은 2보다 작다.');
```

조건문 `IF` 보다 조금 복잡한 조건문이 나올 경우

```sql
SELECT
CASE
  WHEN -1 > 0 THEN '-1은 양수다.'
  WHEN -1 = 0 THEN '-1은 0이다.'
  ELSE '-1은 음수다.'
END;
```

그래서 `IF` 를 사용하기보다는 실제적으로 `WHEN THEN` 을 많이 사용하게 된다.

```sql
  CASE
    WHEN Price < 20 THEN '저가'
    WHEN Price BETWEEN 20 AND 30 THEN '일반'
    ELSE '고가'
  END
FROM Products;
```

| 형식        | 설명                 |
| ----------- | -------------------- |
| IFNULL(A,B) | A가 NULL일 시 B 출력 |

```sql
SELECT
  IFNULL('A', 'B'),
  IFNULL(NULL, 'B');
```
