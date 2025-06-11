import "./style.css";

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add(1, 2));

function foo(num: number, str: string, bool: boolean, empty: null) {
  return [num, str, bool, empty];
}
console.log(foo(10, "Some string", true, null));
