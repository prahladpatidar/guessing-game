// Jai shree Ram 
// jai shree ram
const max=prompt("Enter your maximum number");
const randomnum=Math.floor(Math.random()*max)+1;

let guess=prompt(" guess the number")

while(true){
    if(guess=="quit"){
        console.log("user quit")
        break;
    } 
     if(randomnum==guess){
        console.log("congrat your right guess random number was",randomnum);
        break;
    }else if(guess<randomnum){
        guess=prompt("your guess was too small. plaese try again ");
    } else {
         guess=prompt("your guess was too large. plaese try again ");
    }

    

}

