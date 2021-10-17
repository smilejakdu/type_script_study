import dayjs from "dayjs";

const dayJs = dayjs(new Date());
const listOfYesterdayYearAndMonth = dayJs
  .subtract(1, "day")
  .format("YYYY-MM")
  .split("-");
const [year, month] = listOfYesterdayYearAndMonth;

console.log(listOfYesterdayYearAndMonth);
console.log(year);
console.log(month);
