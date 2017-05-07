'esversion:6';
TYPE = "number";

function validType(args){
  var valid = true;
  if(typeof(args) == TYPE){
    return true;
  }else{
    Array.prototype.slice.call(args).forEach(function(val){
      if(typeof(val) != TYPE){
        valid = false;
      }
    });
  }
  return valid;
}

function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  if(validType(args)){
    if(args.length > 1){
      return args.reduce(function(sum, val){ return sum + val; }, 0);
    }else{
      return (arg) => {
          if(typeof(arg) == TYPE){
            return arg + args[0];
          }
      };
    }
  }
}

addTogether(2,3);
