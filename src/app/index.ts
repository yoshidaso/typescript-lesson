let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";

// オブジェクト宣言
const person = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}

// 配列宣言
const fruits :string[] = ['apple', 'banana', 'grape']
const any :any[] = ['apple', 'banana', 'grape', 1]

// タプル型宣言
const book :[string, number, boolean] = ['business', 1800, true]

// enum宣言
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot : true,
  size : CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT

// any型宣言
// any型はなるべく使わない
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.alskjh = 'alskjh';
let banana = 'banana';
banana = anything;