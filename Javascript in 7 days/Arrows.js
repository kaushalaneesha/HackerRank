//https://www.hackerrank.com/contests/7days-javascript/challenges/arrows
// write the correct arrow function here
var some_array = [3,5,6,1,7];
var my_function = some_array => some_array.map(t => t%2==0 ? t+1 : t-1);
