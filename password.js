// code solution here
process.argv.shift()
process.argv.shift()
var length = process.argv.shift()
var numberOfPasswords = process.argv.shift()

for(var i = 0; i < numberOfPasswords; i++){
  var newPassword = ""
  for(var j = 0; j < length; j++){
    newPassword += Math.floor(Math.random() * 9);
  }
  console.log(newPassword)
}

process.exit(0)
