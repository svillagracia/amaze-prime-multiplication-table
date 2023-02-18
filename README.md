# Amaze Prime Multiplication Table Technical Assessment

## Running the Project

1. Pull pull repo from Github
2. Run `npm install`
3. Run `npm start <N>` where `N` is the number of rows and columns of primes to generate in the table.

## What I'm pleased with:

Math and algorithms is not my strong suit. This project provided the opportunity for me to engage in quite a bit of learning and research before starting to work things out. In the process I learned about the AKS and Miller-Rabin primality tests. The thing I'd be most proud of after learning and implementation (albeit a bit of a confusing endeavor) would be being able to get the tests to all pass again after refactoring when changing the implementation from basic trial-division (in order to get things working at a basic level) to the Miller-Rabin primality test. Overall, this was an awesome learning and growth experience for me.

## What I would do if I had more time:

1. I will admit that the algorithms I learned, even after the bit of research I have done are not entirely clear to me yet. I'd love to expand my knowledge base on these things because I do believe that if I reach a certain level of understanding, I'd be able to do a bit more refactoring of the `isPrime` and its repsective `modPow` helper function to possibly be more elegant and performant.
2. There is a possibility that going down the rabbit hole of the primality tests might have taken too much of my time.
3. I tried a couple different implementations that I discovered of the AKS Primality test. I may have spent too much time with this, but I wanted to try this route first as it was deterministic as opposed to probabilistic and isn't likely to return false positives as the Miller-Rabin possibly could. Though, further research showed that inputting larger numbers into the AKS primality test started to drasticallty affect performance and speed.
