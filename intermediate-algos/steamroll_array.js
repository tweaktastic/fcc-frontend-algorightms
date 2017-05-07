function steamrollArray(arr) {
  result  = arguments[1] || [];
  for(var i in arr){
    if(arr[i].constructor == Array){
      steamrollArray(arr[i], result);
    }else{
      result.push(arr[i]);
    }
  }
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
