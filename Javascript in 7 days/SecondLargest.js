//https://www.hackerrank.com/contests/7days-javascript/challenges/find-second-largest-number-in-an-array
function processData(myArray) {
     var max=myArray[0]; 
     var sec_max;
     if(myArray[0]>myArray[1]){
         max = myArray[0]
         sec_max = myArray[1]
     }else{
         max = myArray[1]
         sec_max = myArray[0]
     }
     for(var i=2;i<myArray.length;i++){
         if(myArray[i]>max){
             sec_max=max;
             max=myArray[i];             
         }else if(myArray[i]!=max && myArray[i]>sec_max){
             sec_max=myArray[i];
         }
     }
    console.log(sec_max);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});