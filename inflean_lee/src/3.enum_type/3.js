var Fruit;
(function (Fruit){
  Fruit[(Fruit['Apple']=0)] = 'Apple';
  Fruit[(Fruit['Banana']=0)] = 'Banana';
  Fruit[(Fruit['Orange']=0)] = 'Orange';
})(Fruit || (Fruit = {}));
console.log(Fruit.Apple , Fruit.Banana , Fruit.Orange);