export { };

enum Fruit {
	Apple, 
	Banana,
	Orange,
}

const FRUIT_PRICE: { [key in Fruit]: number } = {
	[Fruit.Apple]: 1000,
	[Fruit.Banana]: 1500,
	[Fruit.Orange]:1500, // 반드시 설정을 해줘야 에러가 사라진다.
}