module.exports = function getPrimes(n){
  const res = [];

  /*this program allows you to choose a number and then prints the prime numbers between 0 and the number you have choosen*/
  if (n >1  && (typeof n) =="number"){
    for (let counter = 2; counter <= n; counter++) {

    let notPrime = false;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                res.push(counter);
              }
            }
          }
  
  if( typeof n !== 'number' ){
    return(RangeError('non-numeric characters are not accepted'));
  }
    
  if (n === 0){
    return('enter a number greater than 0' );
  }
  if (n == 1){
    return(n, 'is not a prime number');
  }
    
  if (n < 0){
      return(RangeError('enter a positive number'));
    }
   
 return(res.join()); 
}


