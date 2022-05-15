function chooseRandomly<T>(v1: T, v2: T): T {
  return Math.random() <= 0.5 ? v1 : v2;
}

const str: string = chooseRandomly<string>("勝ち", "負け")
console.log(str);

const num: number = chooseRandomly<number>(1, 2);
console.log(num);

const urlA: URL = new URL("https://example.com/a")
const urlB: URL = new URL("https://example.com/b")
const url: URL = chooseRandomly<URL>(urlA, urlB);
console.log(url);