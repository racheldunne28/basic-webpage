function isPrime(num) {
    let isPrime = true;
    let i;
    for (i=2; i<num; i++) {
        if (num % i === 0) {
            isPrime = false
        }
    };
    if (num === 2) {
        isPrime = true
    };
    return isPrime
}


function calculateFactors(num) {
    var factors = []
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
             factors.push(i)
        }
     };
     return factors
}


function calculatePrimeFactors(num) {
    let factors = calculateFactors(num);
    let all_factors_prime = factors.map(isPrime);
    let not_prime;
    let factor;
    let fofs = [];
    while (all_factors_prime.includes(false)) {
        not_prime = all_factors_prime.indexOf(false);
        factor = factors[not_prime]
        fofs = calculateFactors(factor)
        factors.splice(not_prime,1)
        factors = factors.concat(fofs)
        all_factors_prime = factors.map(isPrime);
    }
    factors = [...new Set(factors)]
    if (factors.length === 0) {
        factors = "It's prime!"
    }
    return factors
}


module.exports = {calculatePrimeFactors}