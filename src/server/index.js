var yargs = require('yargs');
var argv = yargs.argv;

argv._.forEach(element =>{
    console.log(element);
});

function isPrime(num) {
    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (let i = 2;  i < num; i++) {
        if (num % i !== 0 ) {
          return true;
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
  console.log(isPrime(3));
