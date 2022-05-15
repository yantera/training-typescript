function chooseRandomlyString(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
function chooseRandomlyNumber(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
function chooseRandomlyURL(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
function chooseRandomly(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
var str = chooseRandomly("勝ち", "負け");
console.log(str);
var num = chooseRandomly(1, 2);
console.log(num);
var urlA = new URL("https://example.com/a");
var urlB = new URL("https://example.com/b");
var url = chooseRandomly(urlA, urlB);
console.log(url);
