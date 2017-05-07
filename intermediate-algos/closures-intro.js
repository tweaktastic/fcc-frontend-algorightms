
function validType(args){
      var valid = true;
      args.forEach(function(a){
              if(typeof(a) != Number){
                    valid = false;
                  }

      });
        return valid;

}


function addTogether() {

      var args = Array.prototype.slice.call(arguments);

        console.log(args);

        if(!validType(args)){
                return undefined;

        }
        if(args.length > 1){
                return args.reduce(function(sum, ele){ return sum+ele;  }, 0);

        }else{
                 return function(arg){
                     if(typeof(arg) != Number){
                                   return undefined;

                     }else{
                                   return arg + args[0];

                     }
                     };

        }

}

addTogether(2,3);

