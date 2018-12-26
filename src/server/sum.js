var yargs = require('yargs');
// var argv = yargs.argv;
// let sum =0;
// let number = argv._[0];


//      if(!isNaN(number)){
//          while(nu)
//      }
//      a = item % 10;
//      sum = sum + a;
//      a= a/10;
//      console.log(sum);
//  });
var a= yargs.argv._[0];
console.log(a);
var sum = yargs.argv._[0].toString().split('').reduce(function(acc,val){
    return parseInt(acc) + parseInt(val);
},0);
console.log('sum is: ' + sum);
 
