function generatePassword(length, count) {
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  return password
}

var passwordLength = process.argv[2]
var passwordCount = process.argv[3]

if (!passwordLength || ! passwordCount) {
  console.log('Please provide valid arguments.')
  process.exit(1)
} else {
  var newPasswords = generatePassword(passwordLength, passwordCount)

  console.log(newPasswords)
  process.exit(0)
}