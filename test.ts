import dayjs from "dayjs";

const todayjs = dayjs(new Date());

const todayDateTimeString = todayjs.format("YYYY-MM-DD");
const yesterdayDateTimeString = todayjs.add(-1, "day").format("YYYY-MM-DD");

console.log(todayDateTimeString); // 오늘 날짜
console.log(yesterdayDateTimeString); // 어제 날짜
