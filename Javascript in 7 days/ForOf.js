//https://www.hackerrank.com/contests/7days-javascript/challenges/js-for-of
//Write your code below this line.
function reverse(s) {
  return s.split('').reverse().join('');
}
for(str of my_array){
    if(reverse(str) == str){
        console.log(str)
    }
}