
function truthCheck(collection, pre) {
      var result = true;
      for(var i in collection){
          if(!collection[i][pre]){
                    result = false;
                          break;

          }

      }
        return result;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

