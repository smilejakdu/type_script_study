# dayjs

https://www.npmjs.com/package/dayjs

> npm install dayjs

# 📌 오늘 날짜 구하기

```ts
import dayjs from "dayjs";

const todayjs = dayjs(new Date());
const todayDateTimeString = todayjs.format("YYYY-MM-DD");
console.log("todayDateTimeString:", todayDateTimeString);
```

# 📌 어제 날짜 구하기

```ts
import dayjs from "dayjs";

const todayjs = dayjs(new Date());

const todayDateTimeString = todayjs.format("YYYY-MM-DD");
const yesterdayDateTimeString = todayjs.add(-1, "day").format("YYYY-MM-DD");

console.log(todayDateTimeString); // 오늘 날짜
console.log(yesterdayDateTimeString); // 어제 날짜
```

# 📌 내일 날짜 구하기

```ts
import dayjs from "dayjs";

const todayjs = dayjs(new Date());
const todayDateTimeString = todayjs.format("YYYY-MM-DD");
console.log(dayjs(todayDateTimeString).add(1, "day").format("YYYY-MM-DD"));
```

# 월 마지막 날짜 구하기

```ts
import dayjs from "dayjs";

const todayjs = dayjs(new Date());
const todayDateTimeString = todayjs.format("YYYY-MM-DD");
console.log(dayjs(todayDateTimeString).daysInMonth());
```
