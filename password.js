// code solution here

function generatePassword(length){
  var pass = ''
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for(let i = 0; i < length; i++){
    pass +=possible.charAt(Math.floor(Math.random()*possible.length))
  }

  console.log(pass)
  return pass
}

if(process.argv.length!==4){
    console.log('Need two arguments')
    return
}
else{
  for(let i = 0; i < parseInt(process.argv[3]);i++)
  generatePassword(process.argv[2])
}
