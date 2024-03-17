import { hoge, Strings } from "./hoge";
const array = ["a", "b", "c"] as const satisfies Strings;

console.log(array.at(-1), hoge);
