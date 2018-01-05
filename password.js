// code solution here
function password() {

  let length = process.argv[2];
  let amt = process.argv[3];
  const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let passArray = [];
  for(let a = 0; a < amt; a++){
      let password = "";
    for(let i = 0; i < length; i++){
      password += CHARACTERS[getRandomInt(0, CHARACTERS.length)];
    }
    passArray.push(password);
  }
console.log(passArray[0]);
}





function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
password();
