# JOIN(INNER JOIN) - 내부 조인

- 양쪽 모두에 값이 있는 행(NOT NULL) 반환
- `INNER` 는 선택사항

```sql
SELECT * FROM Categories C
JOIN Products P
  ON C.CategoryID = P.CategoryID;
```

```sql
SELECT C.CategoryID, C.CategoryName, P.ProductName
FROM Categories C
JOIN Products P
  ON C.CategoryID = P.CategoryID;
```

```sql
SELECT
  CONCAT(
    P.ProductName, ' by ', S.SupplierName
  ) AS Product,
  S.Phone, P.Price
FROM Products P
JOIN Suppliers S
  ON P.SupplierID = S.SupplierID
WHERE Price > 50
ORDER BY ProductName;
```

여러 테이블 `JOIN` 할 수 있습니다.

```sql
SELECT
  C.CategoryID, C.CategoryName,
  P.ProductName,
  O.OrderDate,
  D.Quantity
FROM Categories C
JOIN Products P
  ON C.CategoryID = P.CategoryID
JOIN OrderDetails D
  ON P.ProductID = D.ProductID
JOIN Orders O
  ON O.OrderID = D.OrderID;
```

`JOIN` 한 테이블 `GROUP` 하기

```sql
SELECT
  C.CategoryName,
  MIN(O.OrderDate) AS FirstOrder,
  MAX(O.OrderDate) AS LastOrder,
  SUM(D.Quantity) AS TotalQuantity
FROM Categories C
JOIN Products P
  ON C.CategoryID = P.CategoryID
JOIN OrderDetails D
  ON P.ProductID = D.ProductID
JOIN Orders O
  ON O.OrderID = D.OrderID
GROUP BY C.CategoryID;
```

```sql
SELECT
  C.CategoryName, P.ProductName,
  MIN(O.OrderDate) AS FirstOrder,
  MAX(O.OrderDate) AS LastOrder,
  SUM(D.Quantity) AS TotalQuantity
FROM Categories C
JOIN Products P
  ON C.CategoryID = P.CategoryID
JOIN OrderDetails D
  ON P.ProductID = D.ProductID
JOIN Orders O
  ON O.OrderID = D.OrderID
GROUP BY C.CategoryID, P.ProductID;
```

`SELF JOIN` 같은 테이블끼리

```sql
SELECT
  E1.EmployeeID, CONCAT_WS(' ', E1.FirstName, E1.LastName) AS Employee,
  E2.EmployeeID, CONCAT_WS(' ', E2.FirstName, E2.LastName) AS NextEmployee
FROM Employees E1 JOIN Employees E2
ON E1.EmployeeID + 1 = E2.EmployeeID;
```

```sql
SELECT
  E1.EmployeeID, CONCAT_WS(' ', E1.FirstName, E1.LastName) AS Employee,
  E2.EmployeeID, CONCAT_WS(' ', E2.FirstName, E2.LastName) AS NextEmployee
FROM Employees E1 JOIN Employees E2
ON E1.EmployeeID + 1 = E2.EmployeeID;
```

# JOIN(INNER JOIN) - 내부 조인

- 반대쪽에 데이터가 있든 없든(NULL), 선택된 방향에 있으면 출력 - 행 수 결정
- `OUTER` 는 선택사항

```sql
SELECT
  E1.EmployeeID, CONCAT_WS(' ', E1.FirstName, E1.LastName) AS Employee,
  E2.EmployeeID, CONCAT_WS(' ', E2.FirstName, E2.LastName) AS NextEmployee
FROM Employees E1
LEFT JOIN Employees E2
ON E1.EmployeeID + 1 = E2.EmployeeID
ORDER BY E1.EmployeeID;
-- LEFT를 RIGHT로 바꿔서도 실행해 볼 것
```

```sql
SELECT
  C.CustomerName, S.SupplierName,
  C.City, C.Country
FROM Customers C
LEFT JOIN Suppliers S
ON C.City = S.City AND C.Country = S.Country;
-- LEFT를 RIGHT로 바꿔서도 실행해 볼 것
```

```sql
SELECT
  IFNULL(C.CustomerName, '-- NO CUSTOMER --'),
  IFNULL(S.SupplierName, '-- NO SUPPLIER --'),
  IFNULL(C.City, S.City),
  IFNULL(C.Country, S.Country)
FROM Customers C
LEFT JOIN Suppliers S
ON C.City = S.City AND C.Country = S.Country;
-- LEFT를 RIGHT로 바꿔서도 실행해 볼 것
```

# `CROSS JOIN` - 교차 조인

- 조건 없이 모든 조합 반환(A \* B)

```sql
SELECT
  E1.LastName, E2.FirstName
FROM Employees E1
CROSS JOIN Employees E2
ORDER BY E1.EmployeeID;
```

# `CROSS JOIN` - 교차 조인

| 연산자    | 설명                      |
| --------- | ------------------------- |
| UNION     | 중복을 제거한 집합        |
| UNION ALL | 중복을 제거하지 않은 집합 |

```sql
SELECT CustomerName AS Name, City, Country, 'CUSTOMER'
FROM Customers
UNION
SELECT SupplierName AS Name, City, Country, 'SUPPLIER'
FROM Suppliers
ORDER BY Name;
```
