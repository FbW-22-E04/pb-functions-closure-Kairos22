// 1
function personalDice(name){
  return function(){
    
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


dansRoll();
dansRoll();

console.log('--------------------------');

// 2
function createBase(sth) {
  return function (oth) {
    console.log(sth + oth);
  };
}

const addSix = createBase(6);
addSix(10); 
addSix(21);