
function dropElements(arr, func) {
  // Drop them elements.
  var len = arr.length;
  for(var i = 0; i<len; i++){
    if(func(arr[i])){
      break;
    }
  }
   while(i>0){
    arr.shift();
    i--;
   }
  return arr;
}
console.log("1");
dropElements([1, 2, 3], function(n) {return n < 3; });
