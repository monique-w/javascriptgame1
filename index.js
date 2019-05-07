let answer = prompt("Do you want to play a game?"); //also use while loop

// if they say yes
if (answer === "yes")  { // answer is "yes"
    // ask them their name
  let user = prompt("What is your name?");
  
  // define variables
  let userHealth = 40;
  let grantHealth = 10;
  let winCount = 0;
  
  while (winCount < 3) { // they fight
    grantHealth = grantHealth - Math.ceil(Math.random() * 2);
    userHealth = userHealth - Math.ceil(Math.random() * 2);
    console.log(`${user} has ${userHealth} health remaining. Grant the Mighty Chicken has ${grantHealth} health remaining.`);
    if (grantHealth < 1) {
          console.log(`Grant is defeated ${winCount + 1} time/s.`);
      
          // win count goes to user
          winCount = winCount + 1;  
          if (winCount === 3){
            
            console.log(`Grant gives up! ${user} wins!`);
            
              // the game ends
              break;
          }
        // grant's health resets
        grantHealth = 10;
        console.log("Then Grant gets back up!")
        }
    
      if (userHealth < 1){
        console.log("You are defeated.");
        
        // the game ends
        break;
          
          }
    
  }
}