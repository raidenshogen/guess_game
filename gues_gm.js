

const min=1;
const max=100
const answer=Math.floor(Math.random()*(max - min + 1))+min;

let trys=0;
let guess;
let running=true;

while(running){
  guess=window.prompt(`guess number between ${min} and  ${max}`);
  guess=Number(guess)
 
  if(isNaN(guess)){
    window.alert('please enter a valid number')}
   else if(guess < min || guess > max) {
   window.alert('try again ');
   }else{
    trys++;
    if (guess>answer){
        window.alert("too high")
     }else if(guess<answer){
       window.alert("too low")
      }else if(guess==answer){
      window.alert(`you win! it's ${answer}  and it took u  ${trys} tries`)
      running=false
     
   }
   }



}
