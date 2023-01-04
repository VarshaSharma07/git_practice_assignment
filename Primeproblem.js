let number=15;

let factors=0;

for(let i=0; i<=number, i++){
  
	if(number%i==0){
    
		factors++;
 
	}
}

if(factors==1){
  
	console.log("prime number");

}

else{
 
	console.log("not a prime number");

}
