check_prime(47);  

function check_prime(N){
let factors=0;
for (let i=1; i<=N; i++){
  if(N%i==0){
    factors++;
  }
  
}
if (factors==2){
    console.log(N,"is a prime number");
  }
  else {
    console.log(N,"is not a prime number");
  }

}