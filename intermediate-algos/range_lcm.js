
//noprotect
function smallestCommons(arr) {
  
  var num1, num2, theNumber;
  var matchFound = true;
  var runLoop = true;
  var i = 1;

  if(arr[0] > arr[1]){
    num1 = arr[1];
    num2 = arr[0];
  }else{
    num1 = arr[0];
    num2 = arr[1];
  }

  while(runLoop){
    if((i%num1 === 0) && (i%num2 === 0) && (i !== 1)){
      matchFound = true;
      for(var j=num1+1; j<num2; j++){
        if((i%j !== 0)){
          matchFound = false;
          break;
        }
      }
      if(matchFound){
        theNumber = i;
        break;
      }
    }
    i++;
  }

  return theNumber;
}

smallestCommons([1,5]);
