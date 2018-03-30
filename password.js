const generatePassword = (length, passwords) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
  for(let p = 0; p < passwords; p++) {
    let randomString = '';
    for(let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * chars.length);
      randomString += chars.substring(randomNum, randomNum + 1);
    }
    console.log(randomString);
  }
}

generatePassword(parseInt(process.argv[2]), parseInt(process.argv[3]))
