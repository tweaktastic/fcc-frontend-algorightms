const DENOMINATIONS = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
};
const DENOMS = Object.keys(DENOMINATIONS).reverse();

function getCidSum(cid){
  var cidSum = 0;
  cid.forEach(function(val, idx){
    cidSum += val[1];
  });
  cidSum = parseFloat(cidSum.toFixed(2));
  return cidSum;
}

function mapCidToObj(cid){
  var cidObj = {};
  cid.forEach(function(val, idx){
    cidObj[val[0]] = parseInt(val[1]/DENOMINATIONS[val[0]]);
  });
  return cidObj;
}

function normalizeFloats(val){
  return parseFloat(val).toFixed(2);
}

function getDiff(cash, price){
  return normalizeFloats(cash - price);
}

function checkCashRegister(price, cash, cid) {
  var change = {};
  var diff = getDiff(cash, price);
  var denom_index = 0;
  var cidSum = getCidSum(cid);
  var cidObj = mapCidToObj(cid);
  var result = {
    'status': 'OPEN',
    'change': []
  }
  if(diff == 0){
    // do nothing
  }else if(diff > cidSum){
    result.status = 'INSUFFICIENT_FUNDS';
  }else{
    var flag = 1;
    while(diff != 0){
      if(diff / DENOMINATIONS[DENOMS[denom_index]] >= 1){
        if(cidObj[DENOMS[denom_index]] >= 1){
          change[DENOMS[denom_index]] = change[DENOMS[denom_index]] ? change[DENOMS[denom_index]] + 1 : 1;
          cidObj[DENOMS[denom_index]]--;
          diff = normalizeFloats(diff - DENOMINATIONS[DENOMS[denom_index]]);
        }else{
          denom_index++;
        }
      }else{
        denom_index++;
      }
      if(denom_index >= DENOMS.length){
        flag = 0;
        result = {'status': 'INSUFFICIENT_FUNDS', 'change': []};
        break;
      }
    }
    if(flag){
      var returnChange = [];
      Object.keys(change).forEach(function(val,idx){
        returnChange.push([val, DENOMINATIONS[val] * change[val]]);
      });
      if(getDiff(cash, price) == cidSum){
        result = {'status': 'CLOSED', 'change': cid};
      }else{
        result = {'status': 'OPEN', 'change': returnChange};
      }
    }
  }
  return result;
}

var a = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(a);
