import {autoBindContext} from "../dist/autoBindContext"
const arr = [0,1,2,3,4,5,6,7,8,9];

console.log("autoBindContext: ", autoBindContext)

const newArr = arr
.map(Number::isFinite)
.map(Number.prototype::toExponential)
.forEach(console::log);