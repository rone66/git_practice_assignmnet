function checkPime(a){
  let count=0
  for(let i=1;i<=a;i++){
    if(a%i==0){
      count++;
       console.log(i,"prime");
    }
    console.log(i,"not prime");
  }
}
checkPime(10);